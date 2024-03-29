import React, { useRef, useState } from 'react'

import Pause from '../../assets/svgs/Pause'
import Play from '../../assets/svgs/Play'
import { ContainerCard } from './styled'

interface IStatusPlayer {
  current: number
  total: number
  percent: number
}

function CardMusic({
  title,
  file
}: {
  title: string
  file?: string
  scrollOn: boolean
}) {
  const player = useRef({} as HTMLAudioElement)
  const [isPlaying, setIsPlay] = useState(false)
  const [statusPlayer, setStatusPlayer] = useState<IStatusPlayer>({
    percent: 0
  } as IStatusPlayer)

  function onPlayPause() {
    setIsPlay(!isPlaying)
    if (isPlaying) {
      player.current.pause()
    } else {
      player.current.play()
    }
  }

  return (
    <ContainerCard percent={statusPlayer.percent}>
      <button onClick={onPlayPause}>{isPlaying ? <Pause /> : <Play />}</button>
      <div className="title-progress">
        <h2>{title}</h2>
        <audio
          preload="metadata"
          ref={player}
          src={file}
          onTimeUpdate={() => {
            setStatusPlayer({
              total: player.current.duration,
              current: player.current.currentTime,
              percent:
                (player.current.currentTime / player.current.duration) * 100
            })
          }}
          onEnded={() => setIsPlay(false)}
        >
          <track src="" kind="captions" srcLang="pt" label="" />
        </audio>
        <input
          type="range"
          value={statusPlayer.percent}
          min="0"
          max="100"
          step="0.01"
          onMouseDown={() => setIsPlay(false)}
          onMouseUp={() => setIsPlay(true)}
          onChange={({ target }) => {
            setStatusPlayer({
              total: player.current.duration,
              current: player.current.currentTime,
              percent: Number(target.value)
            })
            player.current.currentTime = Number(target.value)
          }}
        />
      </div>
    </ContainerCard>
  )
}

export default CardMusic
