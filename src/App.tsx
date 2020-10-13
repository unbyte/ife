import { defineComponent, ref } from 'vue'
import styles from './App.module.css'
import { ProgressBar } from "./components/ProgressBar"

const App = defineComponent(() => {
  const timer = ref(new Date().getTime())
  setInterval(() => timer.value = new Date().getTime(), 1000)
  return () => (
    <div class={styles.container}>
      <ProgressBar backgroundColor="#a7c6aa"
                   fontColor="#fff"
                   current={timer.value}
                   start={953136000000}
                   end={3162124800000}
                   title="人生"/>
      <ProgressBar backgroundColor="rgb(113 153 158)"
                   fontColor="#fff"
                   current={timer.value}
                   start={1535731200000}
                   end={1656604800000}
                   title="本科"/>
      <ProgressBar backgroundColor="rgb(198 193 167)"
                   fontColor="#fff"
                   current={timer.value}
                   start={1598889600000}
                   end={1627574400000}
                   title="大三"/>
    </div>
  )
})

export default App
