import { defineComponent, ref, computed } from 'vue'
import styles from './ProgressBar.module.css'

export const ProgressBar = defineComponent({
  props: {
    backgroundColor: String,
    fontColor: String,
    title: String,
    start: Number,
    current: Number,
    end: Number
  },
  setup(props) {
    const progress = computed(() => {
      const p = ((props.current - props.start) * 100 / (props.end - props.start))
      if (p >= 100)
        return '100.000000000'
      return p.toFixed(10)
    })
    return () => (
      <div class={styles.progressBar} style={{
        backgroundColor: props.backgroundColor,
        color: props.fontColor,
      }}>
        <div class={styles.progressText} style={{
          color: props.fontColor
        }}>
          <div class={styles.number}>{progress.value} %</div>
          <div class={styles.title}>{props.title}</div>
        </div>
        <div class={styles.progress} style={{
          width: `${progress.value}vw`,
          backgroundColor: 'inherit',
          filter: 'brightness(0.7)'
        }}>
        </div>
      </div>
    )
  }
})
