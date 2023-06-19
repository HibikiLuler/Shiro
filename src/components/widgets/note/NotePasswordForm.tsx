import { useState } from 'react'
import clsx from 'clsx'

import { StyledButton } from '~/components/ui/button'

export const NotePasswordForm = () => {
  const [password, setPassword] = useState('')
  const handleSubmit: React.EventHandler<React.MouseEvent> = (e) => {
    e.preventDefault()
    window.location.href = `${window.location.href}?password=${password}`
  }
  return (
    <div className="flex h-[calc(100vh-15rem)] flex-col space-y-4 center">
      需要密码才能查看！
      <form className="mt-8 flex flex-col space-y-4 center">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="输入密码以查看"
          aria-label="输入密码以查看"
          className={clsx(
            'min-w-0 flex-auto appearance-none rounded-lg border ring-accent/20 sm:text-sm',
            'bg-base-100 px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-zinc-400 focus:outline-none focus:ring-2',
            'border-zinc-900/10 dark:border-zinc-700',
            'focus:border-accent-focus dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500',
          )}
        />
        <StyledButton
          disabled={!password}
          type="submit"
          variant="primary"
          onClick={handleSubmit}
        >
          快给我康康！
        </StyledButton>
      </form>
    </div>
  )
}
