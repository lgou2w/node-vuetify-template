<template lang="pug">
  v-app(light)
    v-app-bar(app dark color="primary")
      v-toolbar-title Node Vuetify Template
      v-btn(icon @click.stop="goGitHub")
        v-icon mdi-github-circle
    v-content
      v-container(fluid)
        p {{ text }}
        v-text-field(v-model="text" label="Input text:")
        p Long DateTime: {{ $d(new Date(), 'long') }}
        p Short DateTime: {{ $d(new Date()) }}
        p Vuex localStorage counter: {{ counter }}
        v-btn(@click.stop="counter++" color="primary") Increment
        v-btn(@click.stop="counter--" color="primary").mx-2 Decrement
        v-btn(@click.stop="delCounter" color="error") Delete
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { State } from '@/store/modules/global'
import * as types from '@/store/mutation-types'
import { repository } from '@/../package.json'

const globalModule = namespace('global')

@Component({
  name: 'index'
})
export default class Index extends Vue {
  text: string | null = 'HelloWorld!'

  @globalModule.State((state: State) => state.counter) _counter!: number
  @globalModule.Mutation(types.SET_COUNTER) setCounter!: (counter: number) => void
  @globalModule.Mutation(types.DEL_COUNTER) delCounter!: () => void

  get counter (): number { return this._counter }
  set counter (val: number) { this.setCounter(val) }

  goGitHub () {
    window.open(repository, '_blank')
  }
}
</script>
