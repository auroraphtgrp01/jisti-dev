import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
/* eslint-disable no-restricted-globals */
import { DEFAULT_CSS_SELECTOR_ALLOWLIST, DEFAULT_ACTION_CLICK_ALLOWLIST, DEFAULT_DATA_ATTRIBUTE_PREFIX, } from '@amplitude/analytics-core';
import * as constants from './constants';
import { fromEvent, map, share } from 'rxjs';
import { addAdditionalEventProperties, createShouldTrackEvent, getEventProperties, } from './helpers';
import { WindowMessenger } from './libs/messenger';
import { trackClicks } from './autocapture/track-click';
import { trackChange } from './autocapture/track-change';
import { trackActionClick } from './autocapture/track-action-click';
import { createMutationObservable, createClickObservable } from './observables';
import { createLabeledEventToTriggerMap, groupLabeledEventIdsByEventType, matchEventToLabeledEvents, matchLabeledEventsToTriggers, } from './pageActions/triggers';
import { executeActions } from './pageActions/actions';
export var ObservablesEnum;
(function (ObservablesEnum) {
    ObservablesEnum["ClickObservable"] = "clickObservable";
    ObservablesEnum["ChangeObservable"] = "changeObservable";
    // ErrorObservable = 'errorObservable',
    ObservablesEnum["NavigateObservable"] = "navigateObservable";
    ObservablesEnum["MutationObservable"] = "mutationObservable";
})(ObservablesEnum || (ObservablesEnum = {}));
export var autocapturePlugin = function (options) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (options === void 0) { options = {}; }
    var _h = options.dataAttributePrefix, dataAttributePrefix = _h === void 0 ? DEFAULT_DATA_ATTRIBUTE_PREFIX : _h, _j = options.visualTaggingOptions, visualTaggingOptions = _j === void 0 ? {
        enabled: true,
        messenger: new WindowMessenger(),
    } : _j;
    options.cssSelectorAllowlist = (_a = options.cssSelectorAllowlist) !== null && _a !== void 0 ? _a : DEFAULT_CSS_SELECTOR_ALLOWLIST;
    options.actionClickAllowlist = (_b = options.actionClickAllowlist) !== null && _b !== void 0 ? _b : DEFAULT_ACTION_CLICK_ALLOWLIST;
    options.debounceTime = (_c = options.debounceTime) !== null && _c !== void 0 ? _c : 0; // TODO: update this when rage clicks are added to 1000ms
    var name = constants.PLUGIN_NAME;
    var type = 'enrichment';
    var subscriptions = [];
    // Create observables on events on the window
    var createObservables = function () {
        var _a;
        // Create Observables from direct user events
        var clickObservable = createClickObservable().pipe(map(function (click) {
            return addAdditionalEventProperties(click, 'click', options.cssSelectorAllowlist, dataAttributePrefix);
        }), share());
        var changeObservable = fromEvent(document, 'change', { capture: true }).pipe(map(function (change) {
            return addAdditionalEventProperties(change, 'change', options.cssSelectorAllowlist, dataAttributePrefix);
        }), share());
        // Create Observable from unhandled errors
        // const errorObservable = fromEvent<ErrorEvent>(window, 'error').pipe(
        //   map((error) => addAdditionalEventProperties(error, 'error')),
        // );
        // Create observable for URL changes
        var navigateObservable;
        /* istanbul ignore next */
        if (window.navigation) {
            navigateObservable = fromEvent(window.navigation, 'navigate').pipe(map(function (navigate) {
                return addAdditionalEventProperties(navigate, 'navigate', options.cssSelectorAllowlist, dataAttributePrefix);
            }), share());
        }
        // Track DOM Mutations using shared observable
        var mutationObservable = createMutationObservable().pipe(map(function (mutation) {
            return addAdditionalEventProperties(mutation, 'mutation', options.cssSelectorAllowlist, dataAttributePrefix);
        }), share());
        return _a = {},
            _a[ObservablesEnum.ClickObservable] = clickObservable,
            _a[ObservablesEnum.ChangeObservable] = changeObservable,
            // [ObservablesEnum.ErrorObservable]: errorObservable,
            _a[ObservablesEnum.NavigateObservable] = navigateObservable,
            _a[ObservablesEnum.MutationObservable] = mutationObservable,
            _a;
    };
    // Group labeled events by event type (eg. click, change)
    var groupedLabeledEvents = groupLabeledEventIdsByEventType(Object.values((_e = (_d = options.pageActions) === null || _d === void 0 ? void 0 : _d.labeledEvents) !== null && _e !== void 0 ? _e : {}));
    var labeledEventToTriggerMap = createLabeledEventToTriggerMap((_g = (_f = options.pageActions) === null || _f === void 0 ? void 0 : _f.triggers) !== null && _g !== void 0 ? _g : []);
    // Evaluate triggers for the given event by running the actions associated with the matching triggers
    var evaluateTriggers = function (event) {
        var e_1, _a;
        // If there is no pageActions, return the event as is
        var pageActions = options.pageActions;
        if (!pageActions) {
            return event;
        }
        // Find matching labeled events
        var matchingLabeledEvents = matchEventToLabeledEvents(event, Array.from(groupedLabeledEvents[event.type]).map(function (id) { return pageActions.labeledEvents[id]; }));
        // Find matching conditions
        var matchingTriggers = matchLabeledEventsToTriggers(matchingLabeledEvents, labeledEventToTriggerMap);
        try {
            for (var matchingTriggers_1 = __values(matchingTriggers), matchingTriggers_1_1 = matchingTriggers_1.next(); !matchingTriggers_1_1.done; matchingTriggers_1_1 = matchingTriggers_1.next()) {
                var trigger = matchingTriggers_1_1.value;
                executeActions(trigger.actions, event);
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
    var setup = function (config, amplitude) { return __awaiter(void 0, void 0, void 0, function () {
        var shouldTrackEvent, shouldTrackActionClick, allObservables, clickTrackingSubscription, changeSubscription, actionClickSubscription, allowlist, actionClickAllowlist;
        var _a, _b;
        return __generator(this, function (_c) {
            /* istanbul ignore if */
            if (typeof document === 'undefined') {
                return [2 /*return*/];
            }
            shouldTrackEvent = createShouldTrackEvent(options, options.cssSelectorAllowlist);
            shouldTrackActionClick = createShouldTrackEvent(options, options.actionClickAllowlist);
            allObservables = createObservables();
            clickTrackingSubscription = trackClicks({
                allObservables: allObservables,
                options: options,
                amplitude: amplitude,
                shouldTrackEvent: shouldTrackEvent,
                evaluateTriggers: evaluateTriggers,
            });
            subscriptions.push(clickTrackingSubscription);
            changeSubscription = trackChange({
                allObservables: allObservables,
                getEventProperties: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return getEventProperties.apply(void 0, __spreadArray(__spreadArray([], __read(args), false), [dataAttributePrefix], false));
                },
                amplitude: amplitude,
                shouldTrackEvent: shouldTrackEvent,
                evaluateTriggers: evaluateTriggers,
            });
            subscriptions.push(changeSubscription);
            actionClickSubscription = trackActionClick({
                allObservables: allObservables,
                options: options,
                getEventProperties: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return getEventProperties.apply(void 0, __spreadArray(__spreadArray([], __read(args), false), [dataAttributePrefix], false));
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
                (_b = visualTaggingOptions.messenger) === null || _b === void 0 ? void 0 : _b.setup(__assign(__assign({ logger: config === null || config === void 0 ? void 0 : config.loggerProvider }, ((config === null || config === void 0 ? void 0 : config.serverZone) && { endpoint: constants.AMPLITUDE_ORIGINS_MAP[config.serverZone] })), { isElementSelectable: createShouldTrackEvent(options, __spreadArray(__spreadArray([], __read(allowlist), false), __read(actionClickAllowlist), false)), cssSelectorAllowlist: allowlist, actionClickAllowlist: actionClickAllowlist }));
            }
            return [2 /*return*/];
        });
    }); };
    var execute = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, event];
        });
    }); };
    var teardown = function () { return __awaiter(void 0, void 0, void 0, function () {
        var subscriptions_1, subscriptions_1_1, subscription;
        var e_2, _a;
        return __generator(this, function (_b) {
            try {
                for (subscriptions_1 = __values(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
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
//# sourceMappingURL=autocapture-plugin.js.map