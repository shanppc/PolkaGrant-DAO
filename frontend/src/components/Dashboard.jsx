import StatsPanel from './StatsPanel'
import StakePanel from './StakePanel'
import TreasuryPanel from './TreasuryPanel'
import CreateProposal from './CreateProposal'
import ProposalList from './ProposalList'

export default function Dashboard(props) {
  const {
    provider,
    signer,
    address,
    stats,
    tokenMeta,
    proposals,
    nowMs,
    refresh,
    onFunded,
    onVote,
    onFinalize,
    onExecute,
    pushToast,
    setBusy,
    busy,
  } = props

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-6">
      <StatsPanel
        treasuryBalanceWei={stats.treasuryBalanceWei}
        proposalCount={stats.proposalCount}
        activeProposals={stats.activeProposals}
        userTokenBalance={stats.userTokenBalance}
        userStakeBalance={stats.userStakeBalance}
        tokenSymbol={tokenMeta.symbol}
        address={address}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <TreasuryPanel
          signer={signer}
          treasuryBalanceWei={stats.treasuryBalanceWei}
          onFunded={onFunded}
          pushToast={pushToast}
          setBusy={setBusy}
        />
        <StakePanel
          provider={provider}
          signer={signer}
          address={address}
          tokenSymbol={tokenMeta.symbol}
          tokenDecimals={tokenMeta.decimals}
          userTokenBalance={stats.userTokenBalance}
          userStakeBalance={stats.userStakeBalance}
          refresh={refresh}
          pushToast={pushToast}
          setBusy={setBusy}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <CreateProposal signer={signer} refresh={refresh} pushToast={pushToast} setBusy={setBusy} />
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-glow">
          <div className="text-lg font-semibold text-white">How it works</div>
          <div className="mt-2 space-y-2 text-sm text-white/60">
            <div>
              - Stake <span className="font-semibold text-white">{tokenMeta.symbol}</span> to participate in governance.
            </div>
            <div>- Create proposals requesting PAS from the treasury.</div>
            <div>- Vote while a proposal is active. After the deadline, finalize and execute if passed.</div>
            <div className="pt-2 text-xs text-white/45">
              Tip: Use the Faucet button in the header to mint 1500 {tokenMeta.symbol} for testing.
            </div>
          </div>
          {busy ? (
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white/70">
              Processing transaction… data will auto-refresh when confirmed.
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <ProposalList
          proposals={proposals}
          nowMs={nowMs}
          onVote={onVote}
          onFinalize={onFinalize}
          onExecute={onExecute}
          busy={busy}
        />
      </div>
    </div>
  )
}

