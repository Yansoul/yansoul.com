import { useDialogStore } from "@/lib/store/dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from "@/components/ui/dialog"
import Image from "next/image"

export function AddWechatDialog() {
    const { weChatDialog, setWeChatDialog } = useDialogStore()

    return (
        <Dialog open={weChatDialog} onOpenChange={setWeChatDialog}>
            <DialogContent className="sm:max-w-[425px] min-h-[500px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="group flex items-center gap-2 text-lg font-semibold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 transition-transform duration-300 group-hover:rotate-12">
                            👋
                        </span>
                        你好，很高兴认识~
                    </div>

                    <div className="relative h-96 w-96">
                        <Image
                            src="/images/icon/wechat.jpg"
                            alt="微信二维码"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}