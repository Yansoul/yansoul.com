import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type DialogType = {
  weChatDialog: boolean
}

type DialogAction = {
  setWeChatDialog: (value: boolean) => void
}

export const useDialogStore = create<DialogType & DialogAction>()(
  immer((set, _get) => ({
    weChatDialog: false,

    setWeChatDialog: (show: boolean) =>
      set(() => ({
        weChatDialog: show
      })),
  })),
)
