import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'LNkholise/refiloe-blog',
  },
  ui: {
    brand: { 
      name: 'Refiloe Letokotos Content Manager',
    },
  },
  collections: {
    posts: collection({
      label: 'Stories',
      slugField: 'title',
      path: 'content/stories/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        type: fields.select({
          label: 'Story',
          description: 'Select the type of story your post is',
          options: [
            { label: 'grief', value: 'grief' },
            { label: 'gender equality', value: 'gender_equality' },
            { label: 'immigration', value: 'immigration' },
            { label: 'growth', value: 'growth' },
            { label: 'hope', value: 'hope' },
            { label: 'fiction', value: 'fiction' }
          ],
          defaultValue: 'grief'
        }),
        summary: fields.text({
          label: 'Brief Description',
          description: 'A short teaser for the grid view',
          multiline: false,
        }),
        date: fields.date({
          label: 'Event date',
          description: 'The date upon which this post was posted.'
        }),
        duration: fields.integer({
          label: 'Read Time',
          description: 'The time on average it takes to read this post.'
        }),
        image: fields.url({ 
          label: 'Cover Image',
          description: 'The cover image URL of your post.',
        }),
        content: fields.document({
          label: 'Content', 
          links: true,
          dividers: true,
          formatting: true,
          images: {
            directory: 'public/images/uploads/stories', 
            publicPath: '/images/uploads/stories/',
          },
        }),
      },
    }),
  },
  singletons: {
    announcement1: singleton({
      label: 'Announcement #1',
      path: 'content/announcements/slot-1',
      schema: {
        date: fields.date({ label: 'Event date' }),
        content: fields.text({ label: 'Short Description', multiline: true }),
      },
    }),
    announcement2: singleton({
      label: 'Announcement #2',
      path: 'content/announcements/slot-2',
      schema: {
        date: fields.date({ label: 'Event date' }),
        content: fields.text({ label: 'Short Description', multiline: true }),
      },
    }),
  },
});
