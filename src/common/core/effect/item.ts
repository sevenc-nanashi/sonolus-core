import { SRL } from '../resource/srl'

export type EffectItem = {
    name: string
    version: 3
    title: string
    subtitle: string
    author: string
    thumbnail: SRL<'EffectThumbnail'>
    data: SRL<'EffectData'>
    audio: SRL<'EffectAudio'>
}
