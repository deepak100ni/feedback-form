const { saveQuestion, getQuestion } = require("../model/questionModel");

/* -------------------------------------------------------------------------- */
/*                                   saveQuestion                             */
/* -------------------------------------------------------------------------- */

exports.saveQuestion = async (req, res) => {
//   const { filename } = req.file;
  const { name, answer, type, options, requirement, sequence } = req.body;
  const postData = {
    // file: filename,
    name,
    answer,
    type,
    options,
    requirement,
    sequence,
  };

  try {
    const response = await saveQuestion(postData);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: false,
      data: [],
      message: "Internal server error."+error,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                   ListQuestion                             */
/* -------------------------------------------------------------------------- */

exports.list = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const postData = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
  };

  try {
    const response = await getQuestion(postData);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: false,
      data: [],
      message: "Internal server error.",
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                   updateQuestion                             */
/* -------------------------------------------------------------------------- */

exports.updateQuestion = async (req, res) => {
  const { filename } = req.file;
  const { name, answer, type, options, requirement, sequence } = req.body;

  if (!name || !answer || !type || !requirement || !sequence) {
    return res.status(400).json({ error: 'Please provide values for all required fields' });
  }

  const postData = {
    file: filename,
    name,
    answer,
    type,
    options,
    requirement,
    sequence,
  };

  try {
    const response = await updateQuestion(postData);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: false,
      data: [],
      message: "Internal server error.",
    });
  }
};
