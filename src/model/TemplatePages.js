import { Schema, model, models } from "mongoose";

const TemplatePagesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Email is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
    },
    screenshotUrl: {
      type: String,
      required: [true, "screenshot URL is required"],
    },
    purchaseUrl: {
      type: String,
      required: [true, "Purchase URL is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    tags: {
      type: Array,
      required: [true],
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const TemplatePages =
  models.TemplatePages || model("TemplatePages", TemplatePagesSchema);

export default TemplatePages;
