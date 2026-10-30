import React, { useState } from 'react'
import { Cpu, Network, Workflow, Check } from 'lucide-react'

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agent' | 'rag' | 'finetune'>('agent')

  const techStack = [
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'CUDA', category: 'GPU Acceleration' },
    { name: 'vLLM', category: 'High-Throughput Inference' },
    { name: 'TensorRT-LLM', category: 'Kernel Tuning' },
    { name: 'Qdrant', category: 'Vector Search' },
    { name: 'LangGraph', category: 'Agent Orchestration' },
    { name: 'DeepSeek / Llama 3', category: 'Open Weights' },
    { name: 'Anthropic / OpenAI', category: 'Frontier Models' },
    { name: 'Next.js & React 19', category: 'Frontend Platform' },
    { name: 'Docker & K8s', category: 'Infrastructure' },
  ]

  return (
    <section id="architecture" className="py-24 relative bg-[#06070d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Under The Hood
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Robust Production Architecture
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            We design systems that remain rock-solid under thousands of concurrent requests while meeting strict data sovereignty and compliance requirements.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('agent')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'agent'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Autonomous Agent Loop
            </button>
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'rag'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Enterprise Hybrid RAG
            </button>
            <button
              onClick={() => setActiveTab('finetune')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'finetune'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              LoRA &amp; Quantization Pipeline
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-6 sm:p-10 mb-16">
          {activeTab === 'agent' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Agentic Graph Execution</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Self-Reflective Multi-Agent Swarms</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Unlike brittle linear chains, our agents operate inside cyclical state graphs. A master planner decomposes goals into discrete steps, domain sub-agents execute actions through validated APIs, and an independent evaluator verifies outputs before synthesis.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Deterministic safety guardrails surrounding all tool invocations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>State checkpointing for automated crash recovery and resuming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Real-time Human-In-The-Loop escalation triggers</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 bg-black/60 rounded-xl p-5 border border-white/10 font-mono text-xs sm:text-sm text-slate-300 space-y-3">
                <div className="flex items-center justify-between text-slate-500 border-b border-white/10 pb-2">
                  <span>workflow_graph.py</span>
                  <span>LangGraph Engine</span>
                </div>
                <div className="text-purple-400">@graph.node(&quot;planner&quot;)</div>
                <div>async def plan_task(state: AgentState) -&gt; Plan:</div>
                <div className="pl-4 text-slate-400"># Decompose user goal &amp; delegate to specialized sub-agents</div>
                <div className="pl-4 text-emerald-400">return planner_model.decompose(state.goal)</div>
                <div className="text-cyan-400 pt-2">@graph.node(&quot;evaluator&quot;)</div>
                <div>async def verify_output(state: AgentState) -&gt; Status:</div>
                <div className="pl-4 text-slate-400"># Nabla gradient consistency check &amp; hallucination gate</div>
                <div className="pl-4 text-amber-300">if state.confidence &lt; 0.98: return Route.RETRY</div>
                <div className="pl-4 text-purple-300">return Route.OUTPUT_TO_USER</div>
              </div>
            </div>
          )}

          {activeTab === 'rag' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                  <Network className="w-3.5 h-3.5" />
                  <span>Hybrid Semantic Engine</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Zero Hallucinations with Reranked RAG</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Vanilla vector search struggles with exact numbers, SKUs, or dense tabular data. Our architecture marries high-dimensional dense embeddings with BM25 sparse lexical search, funneled through a cross-encoder reranker for 100% cited precision.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Exact page numbers, timestamps, and verifiable source citations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Granular Role-Based Access Control (RBAC) down to document chunks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Fully deployable on-premise or within isolated private cloud VPCs</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 bg-black/60 rounded-xl p-5 border border-white/10 font-mono text-xs sm:text-sm text-slate-300 space-y-3">
                <div className="flex items-center justify-between text-slate-500 border-b border-white/10 pb-2">
                  <span>rag_pipeline.py</span>
                  <span>Qdrant + Cohere Rerank</span>
                </div>
                <div className="text-slate-400"># 1. Hybrid retrieval across vector and keyword indices</div>
                <div>dense_hits = qdrant.search(dense_vector, limit=50)</div>
                <div>sparse_hits = bm25.search(query, limit=50)</div>
                <div className="text-cyan-400 pt-2"># 2. Reciprocal Rank Fusion &amp; Cross-Encoder Re-scoring</div>
                <div>reranked_chunks = cross_encoder.score(dense_hits + sparse_hits)[:5]</div>
                <div className="text-emerald-400 pt-2"># 3. Constrained synthesis with strict grounding guardrails</div>
                <div>return llm.generate_with_citations(prompt, context=reranked_chunks)</div>
              </div>
            </div>
          )}

          {activeTab === 'finetune' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>LoRA / QLoRA &amp; Quantization</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Your Proprietary Model, 10x Lower TCO</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Instead of paying per-token taxes to external proprietary APIs, we fine-tune open-weights models that belong 100% to your enterprise. Compressed via 4-bit AWQ quantization to run lightning-fast on cost-effective GPU instances.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Zero vendor lock-in or surprise API pricing changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Dramatic reduction in ongoing total cost of ownership (TCO)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Predictable latency without shared-pool rate limits</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 bg-black/60 rounded-xl p-5 border border-white/10 font-mono text-xs sm:text-sm text-slate-300 space-y-3">
                <div className="flex items-center justify-between text-slate-500 border-b border-white/10 pb-2">
                  <span>train_lora.py</span>
                  <span>Unsloth &amp; PyTorch</span>
                </div>
                <div className="text-purple-400"># Nabla gradient descent training loop</div>
                <div>model = FastLanguageModel.get_peft_model(base_model, r=16, lora_alpha=32)</div>
                <div>trainer = SFTTrainer(model=model, dataset=enterprise_corpus, ...)</div>
                <div className="text-amber-300 pt-2"># Quantize to 4-bit AWQ for production vLLM deployment</div>
                <div>quantized_model = quantize_awq(model, bits=4, group_size=128)</div>
                <div className="text-emerald-400 pt-2"># Result: 180 tokens/sec on a single A10G instance</div>
                <div>vllm_engine.deploy(quantized_model, port=8000)</div>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Powered by Industry-Leading AI Frameworks &amp; Runtimes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-xs font-semibold text-white">{tech.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ArchitectureSection
