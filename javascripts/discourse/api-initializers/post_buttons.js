import {apiInitializer} from "discourse/lib/api";
import I18n from "I18n";
import { iconNode } from "discourse-common/lib/icon-library";

export default apiInitializer("0.11.1", api => {

  // https://github.com/discourse/discourse-solved/blob/7c50330e046c88f208bfbeaeb9c329465eec047b/assets/javascripts/discourse/initializers/extend-for-solved-button.js#L88
  api.addPostMenuButton("solved", (attrs) => {
    const canAccept = attrs.can_accept_answer;
    const canUnaccept = attrs.can_unaccept_answer;
    const accepted = attrs.accepted_answer;
    const position = "first";

    if (canAccept) {
      return {
        action: "acceptAnswer",
        icon: "far-check-square",
        className: "unaccepted",
        title: "solved.accept_answer",
        label: themePrefix("solved.make-solution"),
        position,
      };
    } else if (canUnaccept && accepted) {
      const title = canUnaccept
        ? "solved.unaccept_answer"
        : "solved.accepted_answer";
      return {
        action: "unacceptAnswer",
        icon: "check-square",
        title,
        className: "accepted fade-out",
        position,
        label: "solved.solution",
      };
    } else if (!canAccept && accepted) {
      return {
        className: "hidden",
        disabled: "true",
        position,
        beforeButton(h) {
          return h(
            "span.accepted-text",
            {
              title: I18n.t("solved.accepted_description"),
            },
            [
              h("span", iconNode("check")),
              h("span.accepted-label", I18n.t("solved.solution")),
            ]
          );
        },
      };
    }
  });
})