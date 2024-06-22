import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    correoElec: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: "Role",
    }
},
    {
        versionKey: false,
    },
    {
        timestamps: true
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
  
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

export default model('User', userSchema);