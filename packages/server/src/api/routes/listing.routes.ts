import { Router } from "express"
import ListingController from "../controller/listing.controller"
import { verfiyUser } from "../middleware/verifyUser.middleware"

export const listingRouter = Router()

const listingController = new ListingController()


listingRouter.post("/", verfiyUser, (req, res) => listingController.createListing(req, res))
listingRouter.get("/", verfiyUser, (req, res) => listingController.getListing(req, res))
listingRouter.delete("/delete/:id", verfiyUser, (req, res) => listingController.deleteListingById(req, res))

