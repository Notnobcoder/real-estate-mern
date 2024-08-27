import { Request, Response } from "express"
import { zodSchema } from "../../schema/user.schema";
import ListingRepository from "../../repository/listing.repository";

class ListingController {
  private readonly Listing: ListingRepository

  constructor() {
    this.Listing = new ListingRepository
  }

  async getListing(_req: Request, res: Response) {
    try {
      // const data = [{ name: "tushar" }, { name: "working" }]
      const user = await this.Listing.getUsers()

      return res.json({ status: true, user })

    } catch (error) {
      return res.json("error Occured" + error.message)

    }
  }

  async deleteListingById(req: Request, res: Response) {
    try {
      const { id } = req.params
      console.log(id)

      const existingUser = this.Listing.findById(id)

      if (!existingUser) {
        return res.status(404).json("user does not exist to delete / Invalid UserId")
      }

      const deleteUser = await this.Listing.deleteUser(id)

      if (!deleteUser) {
        return res.status(404).json("error occured while deleting")
      }

      return res.json({ "status": "success", "message": "User Deleted Succesfully" })



    } catch (error) {

      return res.json("error Occured" + error.message)
    }
  }

  async createListing(req: Request, res: Response) {
    try {
      const { name, description,
        address, regularPrice,
        discountPrice, bathrooms,
        bedrooms, furnished, parking,
        type, offer } = zodSchema.listingSchema.parse(req.body)

      const payload = {
        name: name,
        description: description,
        address: address,
        regularPrice: regularPrice,
        discountPrice: discountPrice,
        bathrooms: bathrooms,
        bedrooms: bedrooms,
        furnished: furnished,
        parking: parking,
        type: type,
        offer: offer
      }

      console.log(payload)


      const data = await this.Listing.createUser(payload)

      if (!data) {
        return res.json({ success: false, "message": "Error Occured in user" })
      }

      return res.json({ success: true, message: "listing created" })
    } catch (error) {
      return res.json("error Occured" + error.message)
    }
  }
}

export default ListingController
