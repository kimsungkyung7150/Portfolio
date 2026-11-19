import example from "@/lib/impactsuite-example.json"

export function ImpactSuiteExample() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-7">
        <h3 className="text-lg font-semibold text-textPrimary">입력 쿼리</h3>
        <pre className="mt-4 whitespace-pre-wrap break-words rounded-lg border border-border bg-background p-4 text-xs leading-6 text-textSecondary sm:text-sm">
          <code>{example.sql}</code>
        </pre>
      </div>
      <div className="min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-7">
        <h3 className="text-lg font-semibold text-textPrimary">파서 출력</h3>
        <dl className="mt-3 divide-y divide-border">
          {[
            ["종류", example.operation],
            ["테이블", example.tables.join(" · ")],
            ["조회 열", example.columns.join(" · ")],
            ["조인", example.join],
            ["필터", example.filter],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[4rem_1fr] gap-3 py-2.5 text-sm">
              <dt className="font-medium text-textSecondary">{label}</dt>
              <dd className="min-w-0 break-words font-mono text-primarySoft">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
