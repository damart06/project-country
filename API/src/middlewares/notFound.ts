import { NotFoundException } from '../utils/errors'

export const NotFoundRoutesHandler = () => {
  throw new NotFoundException(`Ressource not found`)
}