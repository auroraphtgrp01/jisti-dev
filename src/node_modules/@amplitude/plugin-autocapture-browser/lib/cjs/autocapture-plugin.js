"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocapturePlugin = exports.ObservablesEnum = void 0;
var tslib_1 = require("tslib");
/* eslint-disable no-restricted-globals */
var analytics_core_1 = require("@amplitude/analytics-core");
var constants = tslib_1.__importStar(require("./constants"));
var rxjs_1 = require("rxjs");
var helpers_1 = require("./helpers");
var messenger_1 = require("./libs/messenger");
var track_click_1 = require("./autocapture/track-click");
var track_change_1 = require("./autocapture/track-change");
var track_action_click_1 = require("./autocapture/track-action-click");
var observables_1 = require("./observables");
var triggers_1 = require("./pageActions/triggers");
var actions_1 = require("./pageActions/actions");
var ObservablesEnum;
(function (ObservablesEnum) {
    ObservablesEnum["ClickObservable"] = "clickObservable";
    ObservablesEnum["ChangeObservable"] = "changeObservable";
    // ErrorObservable = 'errorObservable',
    ObservablesEnum["NavigateObservable"] = "navigateObservable";
    ObservablesEnum["MutationObservable"] = "mutationObservable";
})(ObservablesEnum = exports.ObservablesEnum || (exports.ObservablesEnum = {}));
var autocapturePlugin = function (options) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (options === void 0) { options = {}; }
    var _h = options.dataAttributePrefix, dataAttributePrefix = _h === void 0 ? analytics_core_1.DEFAULT_DATA_ATTRIBUTE_PREFIX : _h, _j = options.visualTaggingOptions, visualTaggingOptions = _j === void 0 ? {
        enabled: true,
        messenger: new messenger_1.WindowMessenger(),
    } : _j;
    options.cssSelectorAllowlist = (_a = options.cssSelectorAllowlist) !== null && _a !== void 0 ? _a : analytics_core_1.DEFAULT_CSS_SELECTOR_ALLOWLIST;
    options.actionClickAllowlist = (_b = options.actionClickAllowlist) !== null && _b !== void 0 ? _b : analytics_core_1.DEFAULT_ACTION_CLICK_ALLOWLIST;
    options.debounceTime = (_c = options.debounceTime) !== null && _c !== void 0 ? _c : 0; // TODO: update this when rage clicks are added to 1000ms
    var name = constants.PLUGIN_NAME;
    var type = 'enrichment';
    var subscriptions = [];
    // Create observables on events on the window
    var createObservables = function () {
        var _a;
        // Create Observables from direct user events
        var clickObservable = (0, observables_1.createClickObservable)().pipe((0, rxjs_1.map)(function (click) {
            return (0, helpers_1.addAdditionalEventProperties)(click, 'click', options.cssSelectorAllowlist, dataAttributePrefix);
        }), (0, rxjs_1.share)());
        var changeObservable = (0, rxjs_1.fromEvent)(document, 'change', { capture: true }).pipe((0, rxjs_1.map)(function (change) {
            return (0, helpers_1.addAdditionalEventProperties)(change, 'change', options.cssSelectorAllowlist, dataAttributePrefix);
        }), (0, rxjs_1.share)());
        // Create Observable from unhandled errors
        // const errorObservable = fromEvent<ErrorEvent>(window, 'error').pipe(
        //   map((error) => addAdditionalEventProperties(error, 'error')),
        // );
        // Create observable for URL changes
        var navigateObservable;
        /* istanbul ignore next */
        if (window.navigation) {
            navigateObservable = (0, rxjs_1.fromEvent)(window.navigation, 'navigate').pipe((0, rxjs_1.map)(function (navigate) {
                return (0, helpers_1.addAdditionalEventProperties)(navigate, 'navigate', options.cssSelectorAllowlist, dataAttributePrefix);
            }), (0, rxjs_1.share)());
        }
        // Track DOM Mutations using shared observable
        var mutationObservable = (0, observables_1.createMutationObservable)().pipe((0, rxjs_1.map)(function (mutation) {
            return (0, helpers_1.addAdditionalEventProperties)(mutation, 'mutation', options.cssSelectorAllowlist, dataAttributePrefix);
        }), (0, rxjs_1.share)());
        return _a = {},
            _a[ObservablesEnum.ClickObservable] = clickObservable,
            _a[ObservablesEnum.ChangeObservable] = changeObservable,
            // [ObservablesEnum.ErrorObservable]: errorObservable,
            _a[ObservablesEnum.NavigateObservable] = navigateObservable,
            _a[ObservablesEnum.MutationObservable] = mutationObservable,
            _a;
    };
    // Group labeled events by event type (eg. click, change)
    var groupedLabeledEvents = (0, triggers_1.groupLabeledEventIdsByEventType)(Object.values((_e = (_d = options.pageActions) === null || _d === void 0 ? void 0 : _d.labeledEvents) !== null && _e !== void 0 ? _e : {}));
    var labeledEventToTriggerMap = (0, triggers_1.createLabeledEventToTriggerMap)((_g = (_f = options.pageActions) === null || _f === void 0 ? void 0 : _f.triggers) !== null && _g !== void 0 ? _g : []);
    // Evaluate triggers for the given event by running the actions associated with the matching triggers
    var evaluateTriggers = function (event) {
        var e_1, _a;
        // If there is no pageActions, return the event as is
        var pageActions = options.pageActions;
        if (!pageActions) {
            return event;
        }
        // Find matching labeled events
        var matchingLabeledEvents = (0, triggers_1.matchEventToLabeledEvents)(event, Array.from(groupedLabeledEvents[event.type]).map(function (id) { return pageActions.labeledEvents[id]; }));
        // Find matching conditions
        var matchingTriggers = (0, triggers_1.matchLabeledEventsToTriggers)(matchingLabeledEvents, labeledEventToTriggerMap);
        try {
            for (var matchingTriggers_1 = tslib_1.__values(matchingTriggers), matchingTriggers_1_1 = matchingTriggers_1.next(); !matchingTriggers_1_1.done; matchingTriggers_1_1 = matchingTriggers_1.next()) {
                var trigger = matchingTriggers_1_1.value;
                (0, actions_1.executeActions)(trigger.actions, event);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (matchingTriggers_1_1 && !matchingTriggers_1_1.done && (_a = matchingTriggers_1.return)) _a.call(matchingTriggers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return event;
    };
    var setup = function (config, amplitude) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var shouldTrackEvent, shouldTrackActionClick, allObservables, clickTrackingSubscription, changeSubscription, actionClickSubscription, allowlist, actionClickAllowlist;
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            /* istanbul ignore if */
            if (typeof document === 'undefined') {
                return [2 /*return*/];
            }
            shouldTrackEvent = (0, helpers_1.createShouldTrackEvent)(options, options.cssSelectorAllowlist);
            shouldTrackActionClick = (0, helpers_1.createShouldTrackEvent)(options, options.actionClickAllowlist);
            allObservables = createObservables();
            clickTrackingSubscription = (0, track_click_1.trackClicks)({
                allObservables: allObservables,
                options: options,
                amplitude: amplitude,
                shouldTrackEvent: shouldTrackEvent,
                evaluateTriggers: evaluateTriggers,
            });
            subscriptions.push(clickTrackingSubscription);
            changeSubscription = (0, track_change_1.trackChange)({
                allObservables: allObservables,
                getEventProperties: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return helpers_1.getEventProperties.apply(void 0, tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(args), false), [dataAttributePrefix], false));
                },
                amplitude: amplitude,
                shouldTrackEvent: shouldTrackEvent,
                evaluateTriggers: evaluateTriggers,
            });
            subscriptions.push(changeSubscription);
            actionClickSubscription = (0, track_action_click_1.trackActionClick)({
                allObservables: allObservables,
                options: options,
                getEventProperties: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return helpers_1.getEventProperties.apply(void 0, tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(args), false), [dataAttributePrefix], false));
                },
                amplitude: amplitude,
                shouldTrackEvent: shouldTrackEvent,
                shouldTrackActionClick: shouldTrackActionClick,
            });
            subscriptions.push(actionClickSubscription);
            /* istanbul ignore next */
            (_a = config === null || config === void 0 ? void 0 : config.loggerProvider) === null || _a === void 0 ? void 0 : _a.log("".concat(name, " has been successfully added."));
            // Setup visual tagging selector
            if (window.opener && visualTaggingOptions.enabled) {
                allowlist = options.cssSelectorAllowlist;
                actionClickAllowlist = options.actionClickAllowlist;
                /* istanbul ignore next */
                (_b = visualTaggingOptions.messenger) === null || _b === void 0 ? void 0 : _b.setup(tslib_1.__assign(tslib_1.__assign({ logger: config === null || config === void 0 ? void 0 : config.loggerProvider }, ((config === null || config === void 0 ? void 0 : config.serverZone) && { endpoint: constants.AMPLITUDE_ORIGINS_MAP[config.serverZone] })), { isElementSelectable: (0, helpers_1.createShouldTrackEvent)(options, tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(allowlist), false), tslib_1.__read(actionClickAllowlist), false)), cssSelectorAllowlist: allowlist, actionClickAllowlist: actionClickAllowlist }));
            }
            return [2 /*return*/];
        });
    }); };
    var execute = function (event) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, event];
        });
    }); };
    var teardown = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var subscriptions_1, subscriptions_1_1, subscription;
        var e_2, _a;
        return tslib_1.__generator(this, function (_b) {
            try {
                for (subscriptions_1 = tslib_1.__values(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
                    subscription = subscriptions_1_1.value;
                    subscription.unsubscribe();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (subscriptions_1_1 && !subscriptions_1_1.done && (_a = subscriptions_1.return)) _a.call(subscriptions_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return [2 /*return*/];
        });
    }); };
    return {
        name: name,
        type: type,
        setup: setup,
        execute: execute,
        teardown: teardown,
    };
};
exports.autocapturePlugin = autocapturePlugin;
//# sourceMappingURL=autocapture-plugin.js.map