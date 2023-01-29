import { apiInitializer } from "discourse/lib/api";

const replacements = {
  'far-check-square': 'checked',
  'far-eye-slash': 'un-see',
  'reply': 'comment',
  'wrench': 'settings',
  'd-regular': 'notification',
  'd-muted': 'notification-off',
  'bookmark': 'bookmark',
  'pencil-alt': 'edit',
  'd-post-share': 'share',
  'd-topic-share': 'share',
  'd-liked': 'heart-fill',
  'envelope': 'send',
  'user-plus': 'add-person',
  'bell': 'notification',
  'cog': 'settings',
  'users': 'people',
  'certificate': 'badge',
  'search': 'search',
  'comment': 'message',

  'notification.mentioned': 'at',
  'notification.replied': 'message',
  'notification.liked': 'heart-fill',
  'notification.quoted': 'quote',
  'notification.posted': 'notification',
  'notification.edited': 'edit',
  'notification.solved.accepted_notification': 'checked',
  // "notification.group_mentioned": "users",
  // "notification.bookmark_reminder": "discourse-bookmark-clock",
  "notification.liked_2": "heart-fill",
  "notification.liked_many": "heart-fill",
  "notification.liked_consolidated": "heart-fill",
  "notification.private_message": "message",
  "notification.invited_to_private_message": "message",
  "notification.invited_to_topic": "add-person",
  "notification.invitee_accepted": "add-person",
  // "notification.moved_post": "sign-out-alt",
  // "notification.linked": "link",
  "notification.granted_badge": "badge",
  // "notification.topic_reminder": "far-clock",
  // "notification.watching_first_post": "discourse-bell-one",
  "notification.group_message_summary": "people",
  "notification.post_approved": "checked",
  "notification.membership_request_accepted": "add-person",
  "notification.membership_request_consolidated": "people",
  "notification.reaction": "notification",
  // "notification.votes_released": "plus",
  "notification.chat_quoted": "quote",
}

export default apiInitializer("0.11.1", api => {
  console.log(settings);
  Object.entries(replacements).forEach(([original, icon]) => {
    api.replaceIcon(original, `asktug-${icon}`)
  })
});
