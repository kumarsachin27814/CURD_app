import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const { email } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }


    const newUser = new User(req.body);
    const savedData = await newUser.save();

    //  res.status(201).json(savedData);
    res.status(201).json({message:"User created Successfully"});
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req , res) => {
  try {
    const userData = await User.find();

    if(!userData || userData.length === 0){
      return res.status(404).json({message:"user data not found.. "})
    }
    res.status(200).json(userData)
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById =  async (req , res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);

    if(!userExits){
      return res.status(404).json({ message: "user not found.. " });
    }

    res.status(200).json(userExits)
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req , res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);

    if (!userExits) {
      return res.status(404).json({ message: "user not found.. " });
    }

    const updateData = await User.findByIdAndUpdate(id , req.body , {new:true});

    //res.status(200).json(updateData);
    res.status(201).json({ message: "User Updated Successfully" });


  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteUser =  async (req , res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);

    if (!userExits) {
      return res.status(404).json({ message: "user not found.. " });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
}