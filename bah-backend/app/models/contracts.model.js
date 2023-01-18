module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        blockNumber: String,
        contractAddress: String,
        creatorAddress: String,
        question: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Contract = mongoose.model("contracts", schema);
    return Contract;
  };
  