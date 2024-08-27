import { ListingModel } from "../model/listing.model";

class ListingRepository {
  private readonly listingModel: typeof ListingModel;

  constructor() {
    this.listingModel = ListingModel
  }

  async getUsers() {
    return this.listingModel.find()
  }

  async findById(userId: string) {
    return this.listingModel.findById(userId);
  }

  async createUser(userData: any) {
    const user = new this.listingModel(userData);
    return user.save();
  }

  async updateUser(userId: string, updateData: any) {
    return this.listingModel.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async deleteUser(userId: string) {
    return this.listingModel.findByIdAndDelete(userId);
  }
}

export default ListingRepository
