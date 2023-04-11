const commands = require("probot-commands");

const { updateIssueBody, updateComment } = require("./src/badwordsFilter.js");

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  // profranity filter for issues and comments
  app.on(["issues.opened", "issues.closed"], updateIssueBody);
  app.on(["issue_comment.created", "issue_comment.edited"], updateComment);

  // add label using "/label" command
  commands(app, "label", (context, command) => {
    let extractedLabels = command.arguments.match(/^[^.]*(?=[.])/s) || "";
    extractedLabels =
      extractedLabels != "" ? extractedLabels[0].toString() : command.arguments;
    const labels = extractedLabels.split(/, */);
    console.log(labels);
    return context.octokit.issues.addLabels(context.issue({ labels }));
  });
};
