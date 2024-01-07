<script setup lang="ts">
// Need to do processing on dek to show it as string
import { IStory } from "../store/useStoriesStore";
const props = defineProps({
    data: {
        type: Object as () => IStory
    },
    index: Number
})

const htmlToText = (htmlText: string | undefined) => {

    if (htmlText == undefined) {
        return "Snippet not provided!";
    }

    const parser = new DOMParser();

    const doc = parser.parseFromString(htmlText, 'text/html');

    const text = doc.body.textContent || "";

    return text;
}
</script>

<template>
    <VContainer>
        <VCard>
            <VCardItem>
                <VCardTitle style="white-space: normal;">
                    {{ props.index }}.
                    {{ props.data!.title }}
                </VCardTitle>
                <VCardText> {{ htmlToText(props.data!.dek) }} </VCardText>
            </VCardItem>

            <VCardItem>
                <VImg :src="props.data!.hero_image_url" :width="500" alt="Story hero image" />
            </VCardItem>
        </VCard>
    </VContainer>
</template>