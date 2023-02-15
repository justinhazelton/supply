<script setup>
import { onMounted } from "vue";
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/home", { version: "draft" });
const state = reactive({ story: data.story });

onMounted(() => {
  useStoryblokBridge(state.story.id, story => (state.story = story));
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
