const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// to fetche the currently logged-in user's data
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        ); //excludes __v and poassword from the data like bearer??

        return userData;
      } else {
        throw new AuthenticationError("Please Log In");
      }
    },
  },
};
