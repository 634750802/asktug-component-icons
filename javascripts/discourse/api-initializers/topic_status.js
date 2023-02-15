import I18n from "I18n";
import TopicStatus from "discourse/raw-views/topic-status";
import TopicStatusIcons from "discourse/helpers/topic-status-icons";
import {apiInitializer} from "discourse/lib/api";
import { computed } from "@ember/object";

// The default solved icon on title was `far-check-square`, which is an unsolved style. We should replace it by `check-square`

export default apiInitializer("0.11.1", () => {
  // rewrite icons from https://github.com/discourse/discourse-solved/blob/7c50330e046c88f208bfbeaeb9c329465eec047b/assets/javascripts/discourse/initializers/extend-for-solved-button.js#L72
  const icon = TopicStatusIcons.find(icons => icons[0] === "has_accepted_answer")
  icon[1] = 'check-square';

  // https://github.com/discourse/discourse-solved/blob/7c50330e046c88f208bfbeaeb9c329465eec047b/assets/javascripts/discourse/initializers/extend-for-solved-button.js#L239
  TopicStatus.reopen({
    statuses: computed(function () {
      const results = this._super(...arguments);

      // Add new icon
      if (this.topic.has_accepted_answer) {
        // Replace previous created icon
        const i = results.findIndex(result => result.key === 'solved')
        results.set(i, {
          openTag: "span",
          closeTag: "span",
          title: I18n.t("topic_statuses.solved.help"),
          icon: "check-square",
          key: "solved",
        });
      }
      return results;
    }),
  });
})