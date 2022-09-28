define({"oj-message":{fatal:"Uopprettelig",error:"Feil",warning:"Advarsel",info:"Opplysninger",confirmation:"Bekreftelse","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Verdien har ikke forventet format.",detail:"Angi en verdi med forventet format.","plural-separator":", ",hint:{summary:"Eksempel: {exampleValue}",detail:"Angi en verdi i dette formatet: {exampleValue}.","detail-plural":"Angi en verdi i disse formatene: {exampleValue}."},optionHint:{detail:"En godtatt verdi for alternativet {propertyName} er {propertyValueValid}.","detail-plural":"Godtatte verdier for alternativet {propertyName} er {propertyValueValid}."},optionTypesMismatch:{summary:"En verdi for alternativet {requiredPropertyName} er nødvendig når alternativet {propertyName} er satt til {propertyValue}."},optionTypeInvalid:{summary:"Det ble ikke angitt en verdi av forventet type for alternativet {propertyName}."},optionOutOfRange:{summary:"Verdien {propertyValue} er utenfor verdiområdet for alternativet {propertyName}."},optionValueInvalid:{summary:"Det ble angitt en ugyldig verdi, {propertyValue}, for alternativet {propertyName}."},number:{decimalFormatMismatch:{summary:"Den angitte verdien har ikke forventet tallformat."},shortLongUnsupportedParse:{summary:"short og long støttes ikke for konvertereranalyse.",detail:"Endre komponent til readonly. readonly-felt kaller ikke analysefunksjonen for konvertereren."},currencyFormatMismatch:{summary:"Den angitte verdien har ikke forventet valutaformat."},percentFormatMismatch:{summary:"Den angitte verdien har ikke forventet prosentformat."},invalidNumberFormat:{summary:"Den angitte verdien er ikke et gyldig tall.",detail:"Angi et gyldig tall."}},color:{invalidFormat:{summary:"Ugyldig fargeformat.",detail:"Ugyldig fargeformat – valgangivelse"},invalidSyntax:{summary:"Ugyldig fargeangivelse.",detail:"Angi en fargeverdi som samsvarer med CSS3-standarden."}},datetime:{datetimeOutOfRange:{summary:"Verdien {value} er utenfor verdiområdet for {propertyName}.",detail:"Angi en verdi mellom {minValue} og {maxValue}.",hour:"time",minute:"minutt",second:"sekund",millisec:"millisek",month:"måned",day:"dag",year:"år","month name":"navn på måned",weekday:"ukedag"},dateFormatMismatch:{summary:"Den angitte verdien har ikke forventet datoformat."},invalidTimeZoneID:{summary:"Det ble angitt en ugyldig tidssone-ID, {timeZoneID}."},nonExistingTime:{summary:"Det angitte klokkeslettet finnes ikke fordi det inntreffer i overgangen til sommertid."},missingTimeZoneData:{summary:"Tidssonedata mangler. Kall obligatorisk ojs/ojtimezonedata hvis du vil laste tidssonedataene."},timeFormatMismatch:{summary:"Den angitte verdien har ikke forventet klokkeslettformat."},datetimeFormatMismatch:{summary:"Den angitte verdien har ikke forventet dato- og klokkeslettformat."},dateToWeekdayMismatch:{summary:"Datoen {date} faller ikke på en {weekday}.",detail:"Angi en ukedag som samsvarer med datoen."},invalidISOString:{invalidRangeSummary:"Verdien {value} er utenfor verdiområdet for feltet {propertyName} i ISO 8601-strengen {isoStr}.",summary:"Den angitte strengen, {isoStr}, er ikke en gyldig ISO 8601-streng.",detail:"Angi en gyldig ISO 8601-streng."}}},"oj-validator":{length:{hint:{min:"Angi {min} eller flere tegn.",max:"Angi {max} eller færre tegn.",inRange:"Angi {min} til {max} tegn.",exact:"Angi {length} tegn."},messageDetail:{tooShort:"Angi {min} eller flere tegn.",tooLong:"Ikke angi flere enn {max} tegn."},messageSummary:{tooShort:"Det er angitt for få tegn.",tooLong:"Det er angitt for mange tegn."}},range:{number:{hint:{min:"Angi et tall som er større enn eller lik {min}.",max:"Angi et tall som er mindre enn eller lik {max}.",inRange:"Angi et tall mellom {min} og {max}.",exact:"Angi tallet {num}."},messageDetail:{rangeUnderflow:"Angi {min} eller et høyere tall.",rangeOverflow:"Angi {max} eller et lavere tall.",exact:"Angi tallet {num}."},messageSummary:{rangeUnderflow:"Tallet er for lavt.",rangeOverflow:"Tallet er for høyt."}},datetime:{hint:{min:"Angi en dato og et klokkeslett som er på eller etter tidspunktet {min}.",max:"Angi en dato og et klokkeslett som er på eller før tidspunktet {max}.",inRange:"Angi en dato og et klokkeslett mellom {min} og {max}."},messageDetail:{rangeUnderflow:"Angi en dato som er lik eller etter {min}.",rangeOverflow:"Angi en dato som er lik eller før {max}."},messageSummary:{rangeUnderflow:"Datoen og klokkeslettet er tidligere enn minimumsdatoen og minimumsklokkeslettet.",rangeOverflow:"Datoen og klokkeslettet er senere enn maksimumsdatoen og maksimumsklokkeslettet."}},date:{hint:{min:"Angi en dato som er lik eller etter {min}.",max:"Angi en dato som er lik eller før {max}.",inRange:"Angi en dato mellom {min} og {max}."},messageDetail:{rangeUnderflow:"Angi en dato som er lik eller etter {min}.",rangeOverflow:"Angi en dato som er lik eller før {max}."},messageSummary:{rangeUnderflow:"Datoen er tidligere enn minimumsdatoen.",rangeOverflow:"Datoen er senere enn maksimumsdatoen."}},time:{hint:{min:"Angi et klokkeslett som er lik eller etter {min}.",max:"Angi et klokkeslett som er lik eller før {max}.",inRange:"Angi et klokkeslett mellom {min} og {max}."},messageDetail:{rangeUnderflow:"Angi klokkeslettet {min} eller et senere klokkeslett.",rangeOverflow:"Angi klokkeslettet {max} eller et tidligere klokkeslett."},messageSummary:{rangeUnderflow:"Klokkeslettet er tidligere enn minimumsklokkeslettet.",rangeOverflow:"Klokkeslettet er senere enn maksimumsklokkeslettet."}}},restriction:{date:{messageSummary:"Datoen {value} er knyttet til en deaktivert oppføring.",messageDetail:"Datoen du har valgt, er ikke tilgjengelig. Prøv en annen dato."}},regExp:{summary:"Formatet er feil.",detail:"Angi tillatte verdier som er beskrevet i dette regulære uttrykket: {pattern}."},required:{summary:"Det må angis en verdi.",detail:"Angi en verdi."}},"oj-ojEditableValue":{loading:"Laster",requiredText:"Nødvendig",helpSourceText:"Jeg vil vite mer ..."},"oj-ojInputDate":{done:"Ferdig",cancel:"Avbryt",time:"Tidspunkt",prevText:"Forrige",nextText:"Neste",currentText:"I dag",weekHeader:"Uke",tooltipCalendar:"Velg dato.",tooltipCalendarTime:"Velg dato/klokkeslett.",tooltipCalendarDisabled:"Velg dato deaktivert.",tooltipCalendarTimeDisabled:"Velg dato/klokkeslett deaktivert.",picker:"Velger",weekText:"Uke",datePicker:"Datovelger",inputHelp:"Trykk på opp- eller ned-tasten hvis du vil gå til kalenderen.",inputHelpBoth:"Trykk på opp- eller ned-tasten hvis du vil gå til kalenderen, og Skift + opp- eller ned-tasten hvis du vil gå til rullegardinlisten for klokkeslett.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Avbryt",okText:"OK",currentTimeText:"Nå",hourWheelLabel:"Time",minuteWheelLabel:"Minutt",ampmWheelLabel:"AM/PM",tooltipTime:"Velg klokkeslett.",tooltipTimeDisabled:"Velg klokkeslett deaktivert.",inputHelp:"Trykk opp- eller ned-tasten hvis du vil gå til rullegardinlisten for klokkeslett.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Maksimal lengde på {len} overskredet",accessibleMaxLengthRemaining:"{chars} tegn gjenstår."},"oj-ojInputPassword":{regexp:{messageDetail:"Verdien må samsvare med dette mønsteret: {pattern}."},accessibleShowPassword:"Vis passord.",accessibleHidePassword:"Skjul passord."},"oj-ojFilmStrip":{labelAccFilmStrip:"Viser side {pageIndex} av {pageCount}",labelAccArrowNextPage:"Velg Neste hvis du vil vise neste side",labelAccArrowPreviousPage:"Velg Forrige hvis du vil vise forrige side",tipArrowNextPage:"Neste",tipArrowPreviousPage:"Forrige"},"oj-ojDataGrid":{accessibleSortAscending:"{id} sortert i stigende rekkefølge",accessibleSortDescending:"{id} sortert i synkende rekkefølge",accessibleSortable:"{id} kan sorteres",accessibleActionableMode:"Aktiver handlingsmodus.",accessibleNavigationMode:"Aktiver navigeringsmodus, trykk på F2 hvis du vil aktivere redigerings- eller handlingsmodus.",accessibleEditableMode:"Aktiver redigerbar modus, trykk på Escape hvis du vil navigere utenfor datarutenettet.",accessibleSummaryExact:"Dette er et datarutenett med {rownum} rader og {colnum} kolonner",accessibleSummaryEstimate:"Dette er et datarutenett med et ukjent antall rader og kolonner",accessibleSummaryExpanded:"Det er {num} rader som er utvidet nå",accessibleRowExpanded:"Raden er utvidet",accessibleExpanded:"Utvidet",accessibleRowCollapsed:"Raden er sammentrukket",accessibleCollapsed:"Sammentrukket",accessibleRowSelected:"Raden {row} er valgt",accessibleColumnSelected:"Kolonnen {column} er valgt",accessibleStateSelected:"valgt",accessibleMultiCellSelected:"{num} celler er valgt",accessibleColumnSpanContext:"{extent} bred",accessibleRowSpanContext:"{extent} høy",accessibleRowContext:"Rad {index}",accessibleColumnContext:"Kolonne {index}",accessibleRowHeaderContext:"Radoverskrift {index}",accessibleColumnHeaderContext:"Kolonneoverskrift {index}",accessibleRowEndHeaderContext:"Overskrift på slutten av raden, {index}",accessibleColumnEndHeaderContext:"Overskrift på slutten av kolonnen, {index}",accessibleRowHeaderLabelContext:"Etikett for radoverskrift {level}",accessibleColumnHeaderLabelContext:"Etikett for kolonneoverskrift {level}",accessibleRowEndHeaderLabelContext:"Etikett for overskrift på slutten av raden {level}",accessibleColumnEndHeaderLabelContext:"Etikett for overskrift på slutten av kolonnen {level}",accessibleLevelContext:"Nivå {level}",accessibleRangeSelectModeOn:"Modusen for tilføyelse av valgt celleområde er på.",accessibleRangeSelectModeOff:"Modusen tilføyelse av valgt celleområde er av.",accessibleFirstRow:"Du har nådd første rad.",accessibleLastRow:"Du har nådd siste rad.",accessibleFirstColumn:"Du har nådd første kolonne",accessibleLastColumn:"Du har nådd siste kolonne.",accessibleSelectionAffordanceTop:"Øvre utvalgshåndtak.",accessibleSelectionAffordanceBottom:"Nedre utvalgshåndtak.",msgFetchingData:"Henter data ...",msgNoData:"Det finnes ingen elementer å vise.",labelResize:"Endre størrelse",labelResizeWidth:"Endre bredde",labelResizeHeight:"Endre høyde",labelSortAsc:"Sorter stigende",labelSortDsc:"Sorter synkende",labelSortRow:"Sorter rad",labelSortRowAsc:"Sorter rad stigende",labelSortRowDsc:"Sorter rad synkende",labelSortCol:"Sorter kolonne",labelSortColAsc:"Sorter kolonne stigende",labelSortColDsc:"Sorter kolonne synkende",labelCut:"Klipp ut",labelPaste:"Lim inn",labelCutCells:"Klipp ut",labelPasteCells:"Lim inn",labelCopyCells:"Kopier",labelAutoFill:"Autoutfylling",labelEnableNonContiguous:"Aktiver ikke-sammenhengende utvalg",labelDisableNonContiguous:"Deaktiver ikke-sammenhengende utvalg",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Avbryt",accessibleContainsControls:"Inneholder kontroller",labelSelectMultiple:"Velg flere celler",labelResizeDialogApply:"Bruk",labelResizeFitToContent:"Tilpass størrelse",columnWidth:"Bredde i piksler",rowHeight:"Høyde i piksler",labelResizeColumn:"Endre størrelse på kolonne",labelResizeRow:"Endre størrelse på rad",resizeColumnDialog:"Endre størrelse på kolonne",resizeRowDialog:"Endre størrelse på rad",collapsedText:"Trekk sammen",expandedText:"Utvid",tooltipRequired:"Nødvendig"},"oj-ojRowExpander":{accessibleLevelDescription:"Nivå {level}",accessibleRowDescription:"Nivå {level}, rad {num} av {total}",accessibleRowExpanded:"Raden er utvidet",accessibleRowCollapsed:"Raden er sammentrukket",accessibleStateExpanded:"utvidet",accessibleStateCollapsed:"sammentrukket"},"oj-ojStreamList":{msgFetchingData:"Henter data ..."},"oj-ojListView":{msgFetchingData:"Henter data ...",msgNoData:"Det finnes ingen elementer å vise.",msgItemsAppended:"{count} elementer er føyd til slutten.",msgFetchCompleted:"Alle elementer er hentet.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Dobbelttrykk og hold nede. Vent på lyden, og omorganiser ved å dra.",accessibleReorderBeforeItem:"Før {item}",accessibleReorderAfterItem:"Etter {item}",accessibleReorderInsideItem:"Inn i {item}",accessibleNavigateSkipItems:"Hopper over {numSkip} elementer",labelCut:"Klipp ut",labelCopy:"Kopier",labelPaste:"Lim inn",labelPasteBefore:"Lim inn før",labelPasteAfter:"Lim inn etter"},"oj-ojWaterfallLayout":{msgFetchingData:"Henter data ..."},"oj-_ojLabel":{tooltipHelp:"Hjelp",tooltipRequired:"Nødvendig"},"oj-ojLabel":{tooltipHelp:"Hjelp",tooltipRequired:"Nødvendig"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Reduser",tooltipIncrement:"Øk"},"oj-ojTable":{accessibleColumnContext:"Kolonne {index}",accessibleColumnFooterContext:"Bunntekst for kolonne, {index}",accessibleColumnHeaderContext:"Kolonneoverskrift {index}",accessibleContainsControls:"Inneholder kontroller",accessibleRowContext:"Rad {index}",accessibleSortable:"{id} kan sorteres",accessibleSortAscending:"{id} sortert i stigende rekkefølge",accessibleSortDescending:"{id} sortert i synkende rekkefølge",accessibleStateSelected:"valgt",accessibleStateUnselected:"ikke valgt",accessibleSummaryEstimate:"Tabell med {colnum} kolonner og mer enn {rownum} rader",accessibleSummaryExact:"Tabell med {colnum} kolonner og {rownum} rader",labelAccSelectionAffordanceTop:"Øvre utvalgshåndtak",labelAccSelectionAffordanceBottom:"Nedre utvalgshåndtak",labelEnableNonContiguousSelection:"Aktiver ikke-sammenhengende utvalg",labelDisableNonContiguousSelection:"Deaktiver ikke-sammenhengende utvalg",labelResize:"Endre størrelse",labelResizeColumn:"Endre størrelse på kolonne",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Avbryt",labelResizePopupSpinner:"Endre størrelse på kolonne",labelResizeColumnDialog:"Endre størrelse på kolonne",labelColumnWidth:"Bredde i piksler",labelResizeDialogApply:"Bruk",labelSelectRow:"Velg rad",labelSelectAllRows:"Velg alle rader",labelEditRow:"Rediger rad",labelSelectAndEditRow:"Velg og rediger rad",labelSelectColumn:"Velg kolonne",labelSort:"Sorter",labelSortAsc:"Sorter stigende",labelSortDsc:"Sorter synkende",msgFetchingData:"Henter data ...",msgNoData:"Ingen data å vise.",msgInitializing:"Initialiserer ...",msgColumnResizeWidthValidation:"Breddeverdien må være et heltall.",msgScrollPolicyMaxCountSummary:"Overskred maksimalt antall rader for tabellrulling.",msgScrollPolicyMaxCountDetail:"Last på nytt med et mindre datasett.",msgStatusSortAscending:"{0} sortert i stigende rekkefølge.",msgStatusSortDescending:"{0} sortert i synkende rekkefølge.",tooltipRequired:"Nødvendig"},"oj-ojTabs":{labelCut:"Klipp ut",labelPasteBefore:"Lim inn før",labelPasteAfter:"Lim inn etter",labelRemove:"Fjern",labelReorder:"Endre rekkefølge",removeCueText:"Kan fjernes"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Velg en verdi."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Velg en verdi."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Velg en verdi."},searchField:"Søkefelt",noMatchesFound:"Ingen samsvar funnet",noMoreResults:"Ingen flere resultater",oneMatchesFound:"Finner ett treff",moreMatchesFound:"Fant {num} samsvar",filterFurther:"Flere resultater er tilgjengelig. Filtrer ytterligere."},"oj-ojSwitch":{SwitchON:"På",SwitchOFF:"Av"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ingen samsvar funnet",noMoreResults:"Ingen flere resultater",oneMatchesFound:"Finner ett treff",moreMatchesFound:"Fant {num} samsvar",filterFurther:"Flere resultater er tilgjengelig. Filtrer ytterligere."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Velg en verdi."},noMatchesFound:"Ingen samsvar funnet",oneMatchFound:"Finner ett treff",multipleMatchesFound:"Fant {num} samsvar",nOrMoreMatchesFound:"Fant {num} eller flere samsvar",cancel:"Avbryt",labelAccOpenDropdown:"utvid",labelAccClearValue:"nullstill verdi",noResultsLine1:"Finner ingen resultater",noResultsLine2:"Vi finner ingenting som samsvarer med søket."},"oj-ojInputSearch2":{cancel:"Avbryt",noSuggestionsFound:"Finner ingen forslag"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ingen samsvar funnet",oneMatchesFound:"Finner ett treff",moreMatchesFound:"Fant {num} samsvar"},"oj-ojTreeView":{treeViewSelectorAria:"TreeView-velger {rowKey}",retrievingDataAria:"Henter data for knutepunktet {nodeText}",receivedDataAria:"Mottok data for knutepunktet {nodeText}"},"oj-ojTree":{stateLoading:"Laster ...",labelNewNode:"Nytt knutepunkt",labelMultiSelection:"Flere valg",labelEdit:"Rediger ",labelCreate:"Opprett",labelCut:"Klipp ut",labelCopy:"Kopier",labelPaste:"Lim inn",labelPasteAfter:"Lim inn etter",labelPasteBefore:"Lim inn før",labelRemove:"Fjern",labelRename:"Gi nytt navn",labelNoData:"Ingen data"},"oj-ojPagingControl":{labelAccPaging:"Paginering",labelAccPageNumber:"Innhold på side {pageNum} er lastet",labelAccNavFirstPage:"Første side",labelAccNavLastPage:"Siste side",labelAccNavNextPage:"Neste side",labelAccNavPreviousPage:"Forrige side",labelAccNavPage:"Side",labelLoadMore:"Vis flere ...",labelLoadMoreMaxRows:"Maksimumsgrensen på {maxRows} rader er nådd",labelNavInputPage:"Side",labelNavInputPageMax:"av {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} av {pageMax} elementer",fullMsgItemRangeAtLeast:"{pageFrom}–{pageTo} av minst {pageMax} elementer",fullMsgItemRangeApprox:"{pageFrom}–{pageTo} av ca. {pageMax} elementer",msgItemRangeNoTotal:"{pageFrom}-{pageTo} elementer",fullMsgItem:"{pageTo} av {pageMax} elementer",fullMsgItemAtLeast:"{pageTo} av minst {pageMax} elementer",fullMsgItemApprox:"{pageTo} av ca. {pageMax} elementer",msgItemNoTotal:"{pageTo} elementer",msgItemRangeCurrent:"{pageFrom} - {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"av",msgItemRangeOfAtLeast:"av minst",msgItemRangeOfApprox:"av ca.",msgItemRangeItems:"elementer",tipNavInputPage:"Gå til side",tipNavPageLink:"Gå til side {pageNum}",tipNavNextPage:"Neste",tipNavPreviousPage:"Forrige",tipNavFirstPage:"Første",tipNavLastPage:"Siste",pageInvalid:{summary:"Den angitte sideverdien er ugyldig.",detail:"Du må angi en verdi som er større enn 0."},maxPageLinksInvalid:{summary:"Verdien for maxPageLinks er ugyldig.",detail:"Du må angi en verdi som er større enn 4."}},"oj-ojMasonryLayout":{labelCut:"Klipp ut",labelPasteBefore:"Lim inn før",labelPasteAfter:"Lim inn etter"},"oj-panel":{labelAccButtonExpand:"Utvid",labelAccButtonCollapse:"Trekk sammen",labelAccButtonRemove:"Fjern",labelAccFlipForward:"Vend fremover",labelAccFlipBack:"Vend bakover",tipDragToReorder:"Dra hvis du vil endre rekkefølge",labelAccDragToReorder:"Dra hvis du vil endre rekkefølge, kontekstmeny tilgjengelig"},"oj-ojChart":{labelDefaultGroupName:"Gruppe {0}",labelSeries:"Serie",labelGroup:"Gruppe",labelDate:"Dato",labelValue:"Verdi",labelTargetValue:"Mål",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Prosentverdi",labelLow:"Lav",labelHigh:"Høy",labelOpen:"Åpning",labelClose:"Slutt",labelVolume:"Volum",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Maks.",labelOther:"Annet",tooltipPan:"Panorer",tooltipSelect:"Valg med markeringshåndtak",tooltipZoom:"Zoom med markeringshåndtak",componentName:"Diagram"},"oj-dvtBaseGauge":{componentName:"Måler"},"oj-ojDiagram":{promotedLink:"{0} kobling",promotedLinks:"{0} koblinger",promotedLinkAriaDesc:"Indirekte",componentName:"Diagram"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dager",accessibleDurationHours:"{0} timer",accessibleTaskInfo:"Starttidspunktet er {0}, sluttidspunktet er {1}, varigheten er {2}",accessibleMilestoneInfo:"Tidspunktet er {0}",accessibleRowInfo:"Rad {0}",accessibleTaskTypeMilestone:"Milepæl",accessibleTaskTypeSummary:"Sammendrag",accessiblePredecessorInfo:"{0} forgjengere",accessibleSuccessorInfo:"{0} etterfølgere",accessibleDependencyInfo:"Avhengighetstypen {0}, kobler {1} til {2}",startStartDependencyAriaDesc:"start til start",startFinishDependencyAriaDesc:"start til mål",finishStartDependencyAriaDesc:"mål til start",finishFinishDependencyAriaDesc:"mål til mål",tooltipZoomIn:"Zoom inn",tooltipZoomOut:"Zoom ut",labelLevel:"Nivå",labelRow:"Rad",labelStart:"Start",labelEnd:"Slutt",labelDate:"Dato",labelBaselineStart:"Start for referansebasis",labelBaselineEnd:"Slutt for referansebasis",labelBaselineDate:"Dato for referansebasis",labelDowntimeStart:"Starttidspunkt for nedetid",labelDowntimeEnd:"Sluttidspunkt for nedetid",labelOvertimeStart:"Starttidspunkt for overtid",labelOvertimeEnd:"Sluttidspunkt for overtid",labelAttribute:"Attributt",labelLabel:"Etikett",labelProgress:"Fremdrift",labelMoveBy:"Flytt med",labelResizeBy:"Endre størrelse med",taskMoveInitiated:"Oppgaveflyttingen er startet",taskResizeEndInitiated:"Slutt på endring av størrelse på oppgave er startet",taskResizeStartInitiated:"Start på endring av størrelse på oppgave er startet",taskMoveSelectionInfo:"{0} øvrige er valgt",taskResizeSelectionInfo:"{0} øvrige er valgt",taskMoveInitiatedInstruction:"Bruk piltastene hvis du vil flytte",taskResizeInitiatedInstruction:"Bruk piltastene hvis du vil endre størrelse",taskMoveFinalized:"Oppgaveflyttingen er fullført",taskResizeFinalized:"Endring av størrelse på oppgave er fullført",taskMoveCancelled:"Oppgaveflyttingen er avbrutt",taskResizeCancelled:"Endring av størrelse på oppgave er avbrutt",taskResizeStartHandle:"Håndtak for start på endring av størrelse på oppgave",taskResizeEndHandle:"Håndtak for slutt på endring av størrelse på oppgave"},"oj-ojLegend":{componentName:"Forklaring",tooltipExpand:"Utvid",tooltipCollapse:"Trekk sammen"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Annet",labelGroup:"Gruppe",labelSize:"Størrelse",labelAdditionalData:"Tilleggsdata",componentName:"{0}-boks"},"oj-ojPictoChart":{componentName:"Bildediagram"},"oj-ojSparkChart":{componentName:"Diagram"},"oj-ojSunburst":{labelColor:"Farge",labelSize:"Størrelse",tooltipExpand:"Utvid",tooltipCollapse:"Trekk sammen",componentName:"Rose"},"oj-ojTagCloud":{componentName:"Merkesky"},"oj-ojThematicMap":{componentName:"Tematisk kart",areasRegion:"Områder",linksRegion:"Koblinger",markersRegion:"Markører"},"oj-ojTimeAxis":{componentName:"Tidsakse"},"oj-ojTimeline":{componentName:"Tidslinje",accessibleItemDesc:"Beskrivelsen er {0}.",accessibleItemEnd:"Sluttidspunktet er {0}.",accessibleItemStart:"Starttidspunktet er {0}.",accessibleItemTitle:"Tittelen er {0}.",labelSeries:"Serie",tooltipZoomIn:"Zoom inn",tooltipZoomOut:"Zoom ut",labelStart:"Start",labelEnd:"Slutt",labelAccNavNextPage:"Neste side",labelAccNavPreviousPage:"Forrige side",tipArrowNextPage:"Neste",tipArrowPreviousPage:"Forrige",navArrowDisabledState:"Deaktivert",labelDate:"Dato",labelTitle:"Tittel",labelDescription:"Beskrivelse",labelMoveBy:"Flytt med",labelResizeBy:"Endre størrelse med",itemMoveInitiated:"Elementflyttingen er startet",itemResizeEndInitiated:"Slutt på endring av størrelse på element er startet",itemResizeStartInitiated:"Start på endring av størrelse på element er startet",itemMoveSelectionInfo:"{0} øvrige er valgt",itemResizeSelectionInfo:"{0} øvrige er valgt",itemMoveInitiatedInstruction:"Bruk piltastene hvis du vil flytte",itemResizeInitiatedInstruction:"Bruk piltastene hvis du vil endre størrelse",itemMoveFinalized:"Elementflyttingen er fullført",itemResizeFinalized:"Endring av størrelse på element er fullført",itemMoveCancelled:"Elementflyttingen er avbrutt",itemResizeCancelled:"Endring av størrelse på element er avbrutt",itemResizeStartHandle:"Håndtak for start på endring av størrelse på element",itemResizeEndHandle:"Håndtak for slutt på endring av størrelse på element"},"oj-ojTreemap":{labelColor:"Farge",labelSize:"Størrelse",tooltipIsolate:"Isoler",tooltipRestore:"Gjenopprett",componentName:"Trekart        "},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"Mrd.",labelScalingSuffixTrillion:"B",labelScalingSuffixQuadrillion:"Tusen b.",labelInvalidData:"Ugyldige data",labelNoData:"Ingen data å vise",labelClearSelection:"Nullstill valg",labelDataVisualization:"Datavisualisering",stateSelected:"Valgt",stateUnselected:"Ikke valgt",stateMaximized:"Maksimert",stateMinimized:"Minimert",stateExpanded:"Utvidet",stateCollapsed:"Sammentrukket",stateIsolated:"Isolert",stateHidden:"Skjult",stateVisible:"Synlig",stateDrillable:"Drillbar",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} av {1}",accessibleContainsControls:"Inneholder kontroller"},"oj-ojNavigationList":{defaultRootLabel:"Navigeringsliste",hierMenuBtnLabel:"Knappen Hierarkisk meny",selectedLabel:"valgt",previousIcon:"Forrige",msgFetchingData:"Henter data ...",msgNoData:"Det finnes ingen elementer å vise.",overflowItemLabel:"Mer",accessibleReorderTouchInstructionText:"Dobbelttrykk og hold nede. Vent på lyden, og omorganiser ved å dra.",accessibleReorderBeforeItem:"Før {item}",accessibleReorderAfterItem:"Etter {item}",labelCut:"Klipp ut",labelPasteBefore:"Lim inn før",labelPasteAfter:"Lim inn etter",labelRemove:"Fjern",removeCueText:"Kan fjernes"},"oj-ojSlider":{noValue:"ojSlider har ingen verdi",maxMin:"Maksimum kan ikke være mindre enn eller lik minimum",startEnd:"value.start må ikke være større enn value.end",valueRange:"Verdien må være innenfor verdiområdet min. og maks.",optionNum:"Valget {option} er ikke et tall",invalidStep:"Ugyldig trinn. Trinnet må være > 0",lowerValueThumb:"angivelse av laveste verdi",higherValueThumb:"angivelse av høyeste verdi"},"oj-ojDialog":{labelCloseIcon:"Slutt"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Åpner hurtigvindu. Trykk på F6 hvis du vil navigere mellom hurtigvinduet og den tilhørende kontrollen.",ariaLiveRegionInitialFocusNone:"Hurtigvinduet er åpnet. Trykk på F6 hvis du vil navigere mellom hurtigvinduet og den tilhørende kontrollen.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Åpner hurtigvindu. Hurtigvinduet kan lukkes ved å navigere til den siste koblingen inni hurtigvinduet.",ariaLiveRegionInitialFocusNoneTouch:"Hurtigvinduet er åpnet. Naviger til neste kobling hvis du vil etablere fokus inni hurtigvinduet.",ariaFocusSkipLink:"Dobbelttrykk hvis du vil navigere til det åpne hurtigvinduet.",ariaCloseSkipLink:"Dobbelttrykk hvis du vil lukke det åpne hurtigvinduet."},"oj-ojRefresher":{ariaRefreshLink:"Aktiver koblingen hvis du vil oppfriske innholdet",ariaRefreshingLink:"Oppfrisker innhold",ariaRefreshCompleteLink:"Oppfriskingen er fullført"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Vis starthandlinger",ariaShowEndActionsDescription:"Vis slutthandlinger",ariaHideActionsDescription:"Skjul handlinger"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Ikke noe samsvarende gruppehode",ariaOthersLabel:"tall",ariaInBetweenText:"Mellom {first} og {second}",ariaKeyboardInstructionText:"Trykk på Enter hvis du vil velge verdien.",ariaTouchInstructionText:"Dobbelttrykk og hold, slik at bevegelsesmodus aktiveres, og dra deretter opp og ned hvis du vil justere verdien."},"oj-ojMenu":{labelCancel:"Avbryt",ariaFocusSkipLink:"Fokus er inni menyen, dobbelttrykk eller sveip hvis du vil flytte fokus til det første menyelementet."},"oj-ojColorSpectrum":{labelHue:"Nyanse",labelOpacity:"Ugjennomsiktighet",labelSatLum:"Metning/luminans",labelThumbDesc:"Fireveis glidebryter for fargespektrum."},"oj-ojColorPalette":{labelNone:"Ingen"},"oj-ojColorPicker":{labelSwatches:"Fargekart",labelCustomColors:"Egendefinerte farger",labelPrevColor:"Forrige farge",labelDefColor:"Standardfarge",labelDelete:"Slett",labelDeleteQ:"Slette?",labelAdd:"Legg til",labelAddColor:"Legg til farge",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Nyanse",labelSliderSaturation:"Metning",labelSliderSat:"Met",labelSliderLightness:"Lyshet",labelSliderLum:"Lysstyrke",labelSliderAlpha:"Alfa",labelOpacity:"Ugjennomsiktighet",labelSliderRed:"Rød",labelSliderGreen:"Grønn",labelSliderBlue:"Blå"},"oj-ojFilePicker":{dropzoneText:"Slipp filer her eller klikk for å laste",singleFileUploadError:"Last én fil om gangen.",singleFileTypeUploadError:"Du kan ikke laste filer av typen {fileType}.",multipleFileTypeUploadError:"Du kan ikke laste filer av følgende typer: {fileTypes}.",dropzonePrimaryText:"Dra og slipp",secondaryDropzoneText:"Velg en fil, eller slipp en fil her.",secondaryDropzoneTextMultiple:"Velg eller slipp filer her.",unknownFileType:"ukjent"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Pågår"},"oj-ojMessage":{labelCloseIcon:"Slutt",categories:{error:"Feil",warning:"Advarsel",info:"Opplysninger",confirmation:"Bekreftelse"}},"oj-ojSelector":{checkboxAriaLabel:"Avmerkingsboks for valg – {rowKey}",checkboxAriaLabelSelected:" valgt",checkboxAriaLabelUnselected:" ikke valgt"},"oj-ojMessages":{labelLandmark:"Meldinger",ariaLiveRegion:{navigationFromKeyboard:"Åpner meldingsområde. Trykk på F6 hvis du vil navigere tilbake til tidligere fokusert element.",navigationToTouch:"Meldingsområdet inneholder nye meldinger. Bruk VoiceOver-rotoren hvis du vil navigere til meldingslandemerket.",navigationToKeyboard:"Meldingsområdet inneholder nye meldinger. Trykk på F6 hvis du vil navigere til de nyeste meldingene.",newMessage:"Meldingskategori – {category}. {summary}. {detail}."}},"oj-ojMessageBanner":{close:"Slutt",navigationFromMessagesRegion:"Åpner meldingsområde. Trykk på F6 hvis du vil navigere tilbake til tidligere fokusert element.",navigationToMessagesRegion:"Meldingsområdet inneholder nye meldinger. Trykk på F6 hvis du vil navigere til de nyeste meldingene.",error:"Feil",warning:"Advarsel",info:"Opplysninger",confirmation:"Bekreftelse"},"oj-ojConveyorBelt":{tipArrowNext:"Neste",tipArrowPrevious:"Forrige"}});