'use client'

import {
  Bank,
  GithubLogo,
  XLogo,
  InstagramLogo,
  Envelope,
  GraduationCap,
  Coffee,
  Butterfly,
  Pill,
  WechatLogo,
} from '@phosphor-icons/react'
import JikeLogo from '../../../public/images/icon/jike.png'
import Image from 'next/image'
import JUSTLogo from '../../../public/images/icon/just.png'
export function CustomIcon({
  name,
  size = 20,
}: {
  name: string
  size?: number
}) {
  switch (name) {
    case 'bank':
      return <Bank size={size} weight="duotone" />
    case 'github':
      return <GithubLogo size={size} weight="duotone" />
    case 'x':
      return <XLogo size={size} weight="duotone" />
    case 'instagram':
      return <InstagramLogo size={size} weight="duotone" />
    case 'bsky':
      return <Butterfly size={size} weight="duotone" />
    case 'email':
      return <Envelope size={size} weight="duotone" />
    case 'college':
      return <Image 
        src={JUSTLogo} 
        alt="JUST" 
      />
    case 'coffee':
      return <Coffee size={size} weight="duotone" />
    case 'pill':
      return <Pill size={size} weight="duotone" />
    case 'wechat':
      return <WechatLogo size={size} weight="duotone" />
    case 'jike':
      return <Image 
        src={JikeLogo} 
        alt="Jike" 
        width={size} 
        height={size} 
      />
    default:
      return null
  }
}
