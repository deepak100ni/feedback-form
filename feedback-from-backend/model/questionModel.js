const Question = require("../schema/questionSchema");

exports.saveQuestion = async (postData) => {
    console.log('postData',postData);
  let response;

  try {
    const insertQuestion = await Question.create(postData);

    console.log("insertQuestion", insertQuestion);

    if (insertQuestion) {
      response = {
        status: 200,
        success: true,
        data: insertQuestion,
        message: "Question Form created successfully.",
      };
    } else {
      response = {
        status: 400,
        success: false,
        data: [],
        message: "Insertion failed.",
      };
    }
  } catch (error) {
    response = {
      code: 500,
      status: false,
      data: [],
      message: "Internal server error.",
    };
  }

  return response;
};


exports.getQuestion = async (postData) => {
    let response;
    const {page, limit} = postData;
  try {
    const question = await Question.find().skip(page*limit).limit(limit);

    console.log("question", question);

    if (question) {
      response = {
        status: 200,
        success: true,
        data: question,
        message: "List of questions.",
      };
    } else {
      response = {
        status: 400,
        success: false,
        data: [],
        message: "No data available.",
      };
    }
  } catch (error) {
    response = {
      code: 500,
      status: false,
      data: [],
      message: "Internal server error.",
    };
  }

  return response;
}