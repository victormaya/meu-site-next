import React, { useRef, useState } from 'react'

import Pause from '../../assets/svgs/Pause'
import Play from '../../assets/svgs/Play'
import useAnimation from '../../hooks/useAnimation'
import { ContainerCard } from './styled'

interface IStatusPlayer {
  current: number
  total: number
  percent: number
}

function CardMusic({
  title,
  file,
  scrollOn
}: {
  title: string
  file?: string
  scrollOn: boolean
}) {
  const card = React.useRef<HTMLHeadingElement>({} as HTMLHeadingElement)
  useAnimation(card, scrollOn)
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
    <ContainerCard ref={card}>
      <button onClick={onPlayPause}>{isPlaying ? <Pause /> : <Play />}</button>
      <div className="title-progress">
        <h2>{title}</h2>
        <audio
          ref={player}
          src={`https://swnxabum.directus.app/assets/${file}.mp3`}
          onTimeUpdate={() =>
            setStatusPlayer({
              total: player.current.duration,
              current: player.current.currentTime,
              percent:
                (player.current.currentTime / player.current.duration) * 100
            })
          }
        >
          <track src="" kind="captions" srcLang="pt" label="" />
        </audio>

        <progress id="file" value={statusPlayer.percent} max="100" />
      </div>
    </ContainerCard>
  )
}

export default CardMusic
