'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">golden-raspberry-awards documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-6c8f49909d7e4e766c66bfca0c71e7b3a8873e5b4c2b4c4bb050417f69d63bacf9f6f6b397402b6f409517fc686af41f5a5086474c26eaa6542b708644294fe7"' : 'data-bs-target="#xs-components-links-module-AppModule-6c8f49909d7e4e766c66bfca0c71e7b3a8873e5b4c2b4c4bb050417f69d63bacf9f6f6b397402b6f409517fc686af41f5a5086474c26eaa6542b708644294fe7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6c8f49909d7e4e766c66bfca0c71e7b3a8873e5b4c2b4c4bb050417f69d63bacf9f6f6b397402b6f409517fc686af41f5a5086474c26eaa6542b708644294fe7"' :
                                            'id="xs-components-links-module-AppModule-6c8f49909d7e4e766c66bfca0c71e7b3a8873e5b4c2b4c4bb050417f69d63bacf9f6f6b397402b6f409517fc686af41f5a5086474c26eaa6542b708644294fe7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesModule.html" data-type="entity-link" >MoviesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MoviesModule-5fa34abe706006500b8991de6f98893a47607d761fe61946f60a330a722409298aec9b7f752e7fedd886070b2bec241539845f689cf22475fc9535467d239b5d"' : 'data-bs-target="#xs-components-links-module-MoviesModule-5fa34abe706006500b8991de6f98893a47607d761fe61946f60a330a722409298aec9b7f752e7fedd886070b2bec241539845f689cf22475fc9535467d239b5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoviesModule-5fa34abe706006500b8991de6f98893a47607d761fe61946f60a330a722409298aec9b7f752e7fedd886070b2bec241539845f689cf22475fc9535467d239b5d"' :
                                            'id="xs-components-links-module-MoviesModule-5fa34abe706006500b8991de6f98893a47607d761fe61946f60a330a722409298aec9b7f752e7fedd886070b2bec241539845f689cf22475fc9535467d239b5d"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntervalProducersWinListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntervalProducersWinListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesYearListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesYearListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopStudiosWinnerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopStudiosWinnerListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearMultipleWinnerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearMultipleWinnerListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesRoutingModule.html" data-type="entity-link" >MoviesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-a0088e233b517a57d6e35677edda5da1f4eb5857e5813ffe9876335df05c0088e74284c3c426183fb16da445124dc193fb372914cc29db949823d9895e750c5c"' : 'data-bs-target="#xs-components-links-module-SharedModule-a0088e233b517a57d6e35677edda5da1f4eb5857e5813ffe9876335df05c0088e74284c3c426183fb16da445124dc193fb372914cc29db949823d9895e750c5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a0088e233b517a57d6e35677edda5da1f4eb5857e5813ffe9876335df05c0088e74284c3c426183fb16da445124dc193fb372914cc29db949823d9895e750c5c"' :
                                            'id="xs-components-links-module-SharedModule-a0088e233b517a57d6e35677edda5da1f4eb5857e5813ffe9876335df05c0088e74284c3c426183fb16da445124dc193fb372914cc29db949823d9895e750c5c"' }>
                                            <li class="link">
                                                <a href="components/SimpleTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ColumnTable.html" data-type="entity-link" >ColumnTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntervalOfProducers.html" data-type="entity-link" >IntervalOfProducers</a>
                            </li>
                            <li class="link">
                                <a href="classes/MaxMinIntervalOfProducers.html" data-type="entity-link" >MaxMinIntervalOfProducers</a>
                            </li>
                            <li class="link">
                                <a href="classes/Movies.html" data-type="entity-link" >Movies</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudiosWinCount.html" data-type="entity-link" >StudiosWinCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/WinCount.html" data-type="entity-link" >WinCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/YearMultipleWinners.html" data-type="entity-link" >YearMultipleWinners</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MoviesPageable.html" data-type="entity-link" >MoviesPageable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pageable.html" data-type="entity-link" >Pageable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sort.html" data-type="entity-link" >Sort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Year.html" data-type="entity-link" >Year</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});