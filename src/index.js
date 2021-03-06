import { DruxtViewsNuxtModule } from './nuxtModule'
import * as DruxtViewsComponents from './components'
import * as DruxtViewsMixins from './mixins'

/**
 * The Nuxt.js module function.
 *
 * Installs the module functionality in a Nuxt application.
 *
 * @type {Function}
 * @exports default
 * @name DruxtViewsNuxtModule
 * @see {@link ./module|DruxtViewsNuxtModule}
 */
export default DruxtViewsNuxtModule

/**
 * Vue.js components.
 *
 * @type {object}
 * @exports DruxtViewsComponents
 * @see {@link ./components/DruxtView|DruxtView}
 * @see {@link ./components/DruxtViewsFilter|DruxtViewsFilter}
 * @see {@link ./components/DruxtViewsFilters|DruxtViewsFilters}
 * @see {@link ./components/DruxtViewsPager|DruxtViewsPager}
 * @see {@link ./components/DruxtViewsSorts|DruxtViewsSorts}
 * @see {@link ./components/blocks/DruxtBlockViewsBlock|DruxtBlockViewsBlock}
 */
export { DruxtViewsComponents }
export * from './components'

/**
 * Vue.js mixins.
 *
 * @type {object}
 * @exports DruxtViewsMixins
 * @see {@link ./mixins|DruxtViewsMixins}
 * @see {@link ./mixins/filter|DruxtViewsFilterMixin}
 * @see {@link ./mixins/filters|DruxtViewsFiltersMixin}
 * @see {@link ./mixins/pager|DruxtViewsPagerMixin}
 * @see {@link ./mixins/sorts|DruxtViewsSortsMixin}
 * @see {@link ./mixins/view|DruxtViewsViewMixin}
 */
export { DruxtViewsMixins }
export * from './mixins'

/**
 * Vuex store module.
 *
 * @type {object}
 * @exports DruxtViewsStore
 * @name DruxtViewsStore
 * @see {@link ./stores/views|DruxtViewsStore}
 */
export { DruxtViewsStore } from './stores/views'
