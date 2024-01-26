import { StaticImageData } from 'next/image'

export default interface IProject {
  title: string
  image: StaticImageData
  shortDescription: string
  description?: string
  type?: string
  stack: string
  repository?: string
  link?: string
}
