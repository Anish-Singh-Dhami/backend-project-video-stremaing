import mongoose, { Schema } from mongoose
import bcrypt from "bcrypt"


const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trime: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required !!"]
    },
    refreshToken: {
        type: String
    },
    fullName: {
        type: String,
        require: true,
        lowercase: true,
        trime: true,
        index: true
    },
    watchHistory: [{
        type: Schema.Types.ObjectID,
        ref: "Video"
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trime: true,
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: false
    }

}, { timestamps: true });

// pre-hooks / pre-middleware to encrypt the password : executed before a 'SAVE' event occurs
userSchema.pre("save", async function (next) {
    // update only when password field is modified
    if (this.isModified("password")) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (err) {
            return next(err);
        }
    }
    next();
})

// return 'true' if the password in DB matches with the password provided
// Instance Methods (operates on individual document instances)
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// generate access-tokens : used for authentication and authorization in web applications
userSchema.methods.generateAccessToken = async function () {
    // generate through signing
    const secretKey = process.env.ACCESS_TOKEN_SECRET;
    const payload = {
        _id: this.id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    }
    const options = {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    // may take some time for computation 
    return await jwt.sign(payload, secretKey, options);
}

// generate referesh-tokens
userSchema.methods.generateRefereshToken = async function () {
    const payload = { _id: this.id, }
    const secretKey = process.env.REFRESH_TOKEN_SECRET;
    const options = { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }

    return await jwt.sign(payload, secretKey, options);
}

export const User = mongoose.model("User", userSchema);