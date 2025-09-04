import { BrowserClient, BrowserConfig, EnrichmentPlugin, ElementInteractionsOptions } from '@amplitude/analytics-core';
import { Observable } from 'rxjs';
import { ElementBasedTimestampedEvent, TimestampedEvent, NavigateEvent } from './helpers';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
declare global {
    interface Window {
        navigation: HasEventTargetAddRemove<Event>;
    }
}
type BrowserEnrichmentPlugin = EnrichmentPlugin<BrowserClient, BrowserConfig>;
export type AutoCaptureOptionsWithDefaults = Required<Pick<ElementInteractionsOptions, 'debounceTime' | 'cssSelectorAllowlist' | 'actionClickAllowlist'>> & ElementInteractionsOptions;
export declare enum ObservablesEnum {
    ClickObservable = "clickObservable",
    ChangeObservable = "changeObservable",
    NavigateObservable = "navigateObservable",
    MutationObservable = "mutationObservable"
}
export interface AllWindowObservables {
    [ObservablesEnum.ClickObservable]: Observable<ElementBasedTimestampedEvent<MouseEvent>>;
    [ObservablesEnum.ChangeObservable]: Observable<ElementBasedTimestampedEvent<Event>>;
    [ObservablesEnum.NavigateObservable]: Observable<TimestampedEvent<NavigateEvent>> | undefined;
    [ObservablesEnum.MutationObservable]: Observable<TimestampedEvent<MutationRecord[]>>;
}
export declare const autocapturePlugin: (options?: ElementInteractionsOptions) => BrowserEnrichmentPlugin;
export {};
//# sourceMappingURL=autocapture-plugin.d.ts.map