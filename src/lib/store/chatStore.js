import { writable } from "svelte/store";
import allChats from '../../lib/view/work/chatData.json';

export const chatContent = writable(allChats);
