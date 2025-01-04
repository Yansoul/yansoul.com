import { useDialogStore } from "@/lib/store/dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


export function AddWechatDialog() {
    const { weChatDialog, setWeChatDialog } = useDialogStore()

    return (
        <Dialog open={weChatDialog} onOpenChange={setWeChatDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h2>添加微信</h2>
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}