import { BidModel } from './'

export interface NFTDataModel {
  id: string
  name: string
  creator: string
  price: number
  description: string
  image: any
  bids: BidModel[]
}
