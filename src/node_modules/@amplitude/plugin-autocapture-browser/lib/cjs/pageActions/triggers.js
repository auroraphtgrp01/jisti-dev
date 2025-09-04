"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchLabeledEventsToTriggers = exports.matchEventToLabeledEvents = exports.createLabeledEventToTriggerMap = exports.groupLabeledEventIdsByEventType = void 0;
var tslib_1 = require("tslib");
var matchEventToFilter_1 = require("./matchEventToFilter");
// groups labeled events by event type
// skips any labeled events with malformed definitions or unexpected event_type
var groupLabeledEventIdsByEventType = function (labeledEvents) {
    var e_1, _a, e_2, _b;
    var _c;
    var groupedLabeledEvents = {
        click: new Set(),
        change: new Set(),
    };
    if (!labeledEvents) {
        return groupedLabeledEvents;
    }
    try {
        for (var labeledEvents_1 = tslib_1.__values(labeledEvents), labeledEvents_1_1 = labeledEvents_1.next(); !labeledEvents_1_1.done; labeledEvents_1_1 = labeledEvents_1.next()) {
            var le = labeledEvents_1_1.value;
            try {
                try {
                    for (var _d = (e_2 = void 0, tslib_1.__values(le.definition)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var def = _e.value;
                        (_c = groupedLabeledEvents[def.event_type]) === null || _c === void 0 ? void 0 : _c.add(le.id);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            catch (e) {
                // Skip this labeled event if there is an error
                console.warn('Skipping Labeled Event due to malformed definition', le === null || le === void 0 ? void 0 : le.id, e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (labeledEvents_1_1 && !labeledEvents_1_1.done && (_a = labeledEvents_1.return)) _a.call(labeledEvents_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return groupedLabeledEvents;
};
exports.groupLabeledEventIdsByEventType = groupLabeledEventIdsByEventType;
// TODO: add tests
var createLabeledEventToTriggerMap = function (triggers) {
    var e_3, _a, e_4, _b;
    var labeledEventToTriggerMap = new Map();
    try {
        for (var triggers_1 = tslib_1.__values(triggers), triggers_1_1 = triggers_1.next(); !triggers_1_1.done; triggers_1_1 = triggers_1.next()) {
            var trigger = triggers_1_1.value;
            try {
                for (var _c = (e_4 = void 0, tslib_1.__values(trigger.conditions)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var condition = _d.value;
                    if (condition.type === 'LABELED_EVENT') {
                        var eventId = condition.match.eventId;
                        // Get existing triggers for this event ID or initialize empty array
                        var existingTriggers = labeledEventToTriggerMap.get(eventId);
                        if (!existingTriggers) {
                            existingTriggers = [];
                            labeledEventToTriggerMap.set(eventId, existingTriggers);
                        }
                        // Add current trigger to the list of triggers for this event ID
                        existingTriggers.push(trigger);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (triggers_1_1 && !triggers_1_1.done && (_a = triggers_1.return)) _a.call(triggers_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return labeledEventToTriggerMap;
};
exports.createLabeledEventToTriggerMap = createLabeledEventToTriggerMap;
/**
 * Matches an event to labeled events based on the event's properties.
 * The logic matches exactly what is supported by the query backend.
 * TODO: later pre-filter the labeled events based on URL first
 *
 * @param event - The event to match against labeled events
 * @param labeledEvents - Array of labeled events to match against
 * @returns Array of matching labeled events
 */
var matchEventToLabeledEvents = function (event, labeledEvents) {
    return labeledEvents.filter(function (le) {
        return le.definition.some(function (def) {
            return def.event_type === event.type && def.filters.every(function (filter) { return (0, matchEventToFilter_1.matchEventToFilter)(event, filter); });
        });
    });
};
exports.matchEventToLabeledEvents = matchEventToLabeledEvents;
var matchLabeledEventsToTriggers = function (labeledEvents, leToTriggerMap) {
    var e_5, _a;
    var matchingTriggers = new Set();
    try {
        for (var labeledEvents_2 = tslib_1.__values(labeledEvents), labeledEvents_2_1 = labeledEvents_2.next(); !labeledEvents_2_1.done; labeledEvents_2_1 = labeledEvents_2.next()) {
            var le = labeledEvents_2_1.value;
            var triggers = leToTriggerMap.get(le.id);
            if (triggers) {
                triggers.forEach(function (trigger) { return matchingTriggers.add(trigger); });
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (labeledEvents_2_1 && !labeledEvents_2_1.done && (_a = labeledEvents_2.return)) _a.call(labeledEvents_2);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return Array.from(matchingTriggers);
};
exports.matchLabeledEventsToTriggers = matchLabeledEventsToTriggers;
//# sourceMappingURL=triggers.js.map