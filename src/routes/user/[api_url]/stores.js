import { writable } from 'svelte/store';

export const show_submit_screen = writable(false);
export const show_info_screen = writable(false);
export const VERSION_NUMBER = writable('0.0.0alpha');
