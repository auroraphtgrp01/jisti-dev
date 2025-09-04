import { Trigger } from '@amplitude/analytics-core/lib/esm/types/element-interactions';
import type { LabeledEvent } from '@amplitude/analytics-core/lib/esm/types/element-interactions';
import { ElementBasedTimestampedEvent, ElementBasedEvent } from 'src/helpers';
export declare const groupLabeledEventIdsByEventType: (labeledEvents?: LabeledEvent[] | null) => {
    click: Set<string>;
    change: Set<string>;
};
export declare const createLabeledEventToTriggerMap: (triggers: Trigger[]) => Map<string, Trigger[]>;
/**
 * Matches an event to labeled events based on the event's properties.
 * The logic matches exactly what is supported by the query backend.
 * TODO: later pre-filter the labeled events based on URL first
 *
 * @param event - The event to match against labeled events
 * @param labeledEvents - Array of labeled events to match against
 * @returns Array of matching labeled events
 */
export declare const matchEventToLabeledEvents: (event: ElementBasedTimestampedEvent<ElementBasedEvent>, labeledEvents: LabeledEvent[]) => LabeledEvent[];
export declare const matchLabeledEventsToTriggers: (labeledEvents: LabeledEvent[], leToTriggerMap: Map<string, Trigger[]>) => Trigger[];
//# sourceMappingURL=triggers.d.ts.map