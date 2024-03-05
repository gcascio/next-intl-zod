// Use type safe message keys with `next-intl`
type GlobalMessages = typeof import('./messages/en.json');
type ZodMessages = typeof import('./messages/zod/en.json');
type Messages = GlobalMessages & ZodMessages;
declare interface IntlMessages extends Messages {}