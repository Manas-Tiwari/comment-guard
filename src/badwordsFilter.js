const BADWORDS = require("./BADWORDS.js");

const replaceBadword = (word) => "*".repeat(word.length);

const warnUser = async (context) => {
  const warnComment = context.issue({
    body: `User ${context.payload.comment.user.login} has been warned for using offensive words.`,
  });
  await context.octokit.issues.createComment(warnComment);
}

const updateIssueBody = async(context) => {
  const { issue } = context.payload;
  const body = issue.body.replace(BADWORDS, replaceBadword);
  const param = context.issue({ body });
  return await context.octokit.issues.update(param);
};

const updateComment = async (context) => {
  const payload = context.payload.comment.body;
  const body = payload.replace(BADWORDS, replaceBadword);
  const updatedComment = context.issue({
    comment_id: context.payload.comment.id,
    body: body,
  });
  if (payload != body) warnUser(context);
  return await  context.octokit.issues.updateComment(updatedComment);
};

module.exports = { updateComment, updateIssueBody };
