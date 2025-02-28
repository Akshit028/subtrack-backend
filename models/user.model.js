import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, 'username is required'],
            trim: true,
            minLength: 2,
            maxLength: 20
        }, 
        email: {
            type: String,
            required: [true, 'email is required'],
            trim: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            minLength: 6,
        },
    }, {timestamps: true}
);
const User = mongoose.model('User', userSchema);

export default User;