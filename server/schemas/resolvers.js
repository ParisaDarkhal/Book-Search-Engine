const { User, Book } = require("../models");
const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("");
    },
  },
};
