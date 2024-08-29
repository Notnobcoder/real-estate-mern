import { UserModel } from "../model/user.model";

class UserRepository {
  private readonly userModel: typeof UserModel;

  constructor() {
    this.userModel = UserModel;
  }

  async getUsers() {
    return this.userModel.find()
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async findByVerificationToken(verificationToken: string) {
    return this.userModel.findOne({ verificationToken });
  }

  async findById(userId: string) {
    return this.userModel.findById(userId);
  }

  async createUser(userData: any) {
    const user = new this.userModel(userData);
    return user.save();
  }

  async updateUser(userId: string, updateData: any) {
    return this.userModel.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async deleteUser(userId: string) {
    return this.userModel.findByIdAndDelete(userId);
  }
}

export default UserRepository;
