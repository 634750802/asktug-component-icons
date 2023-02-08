import {apiInitializer} from "discourse/lib/api";
import {computed} from "@ember/object";

const replacements = {
  'far-check-square': 'checked',
  'far-eye-slash': 'eye-off',
  'far-eye': 'eye-on',
  'reply': 'comment',
  'wrench': 'settings',
  'd-regular': 'notification',
  'd-muted': 'notification-off',
  'bookmark': 'bookmark',
  'pencil-alt': 'edit',
  'd-post-share': 'share',
  'd-topic-share': 'share',
  'd-liked': 'heart-fill',
  'd-unliked': 'heart-outline',
  'envelope': 'message',
  'user-plus': 'add-person',
  'bell': 'notification',
  'cog': 'settings',
  'users': 'people',
  'certificate': 'badge',
  'search': 'search',
  'comment': 'chat',
  'topic.plus': 'send',
  'user': 'people',
  'mutate-user': 'mute',
  'd-tracking': 'notification',
  'd-watching': 'notification',
  'share': 'share',
  'thumbtack': 'pin',
  'thumbtack unpinned': 'pin',
  'lock': 'locked',
  'plus': 'add',
  'random': 'random',
  'far-trash-alt': 'delete',
  'downward': 'goto-bottom',
  'shield-alt': 'shield',
  'trash-alt': 'delete',
  'out-alt': 'exit',
  'upload': 'upload',
  'check': 'check-all',
  'hands-helping': 'celebrate',
  'flag': 'flag',
  'heart': 'heart-fill',
  'quote-left': 'quote',
  'check-square': 'checked',

  'notification.mentioned': 'at',
  'notification.replied': 'message',
  'notification.liked': 'heart-fill',
  'notification.quoted': 'quote',
  'notification.posted': 'notification',
  'notification.edited': 'edit',
  'notification.solved.accepted_notification': 'checked',
  "notification.group_mentioned": "people",
  // "notification.bookmark_reminder": "discourse-bookmark-clock",
  "notification.liked_2": "heart-fill",
  "notification.liked_many": "heart-fill",
  "notification.liked_consolidated": "heart-fill",
  "notification.private_message": "message",
  "notification.invited_to_private_message": "message",
  "notification.invited_to_topic": "add-person",
  "notification.invitee_accepted": "add-person",
  // "notification.moved_post": "sign-out-alt",
  "notification.linked": "quote",
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
  Object.entries(replacements).forEach(([original, icon]) => {
    api.replaceIcon(original, `asktug-${icon}`)
  })

  // dirty change changeToMuted icon from component:user-notifications-dropdown
  const c = Discourse.lookup('component:user-notifications-dropdown')
  const previousContent = Object.getOwnPropertyDescriptor(c.__proto__, 'content').get;
  c.__proto__.reopen({
    content: computed(function () {
      const items = previousContent.call(this)
      const mutateItem = items.find(item => item.id === 'changeToMuted')
      if (mutateItem) {
        mutateItem.icon = 'mutate-user'
      }
      return items
    })
  })
});
