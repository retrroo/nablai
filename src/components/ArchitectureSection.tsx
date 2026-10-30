import React, { useState } from 'react'
import { Check, Terminal, FileCode, Layers } from 'lucide-react'

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agent' | 'rag' | 'finetune'>('agent')

  const techStack = [
    'PyTorch',
    'CUDA',
    'vLLM',
    'Qdrant',
    'LangGraph',
    'TensorRT-LLM',
    'DeepSeek',
    'Llama 3',
    'Next.js 19',
    'Docker & K8s',
  ]

  return (
    <section id="architecture" className="py-28 relative bg-[#040508] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              04 &mdash; Systems Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              Production-Grade Infrastructure <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">engineered for deterministic reliability.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Every pipeline is designed with explicit fallback paths, continuous checkpointing, and strict latency budgets.
          </p>
        </div>

        {/* Tab Selector & Engineering Terminal Window */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#07080d] overflow-hidden">
          {/* Top Bar with IDE tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.06] bg-black/40 px-4 sm:px-6">
            <div className="flex items-center gap-2 py-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('agent')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'agent'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>agentic_graph.py</span>
              </button>
              <button
                onClick={() => setActiveTab('rag')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'rag'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>hybrid_rag_pipeline.py</span>
              </button>
              <button
                onClick={() => setActiveTab('finetune')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'finetune'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>unsloth_quantize.py</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              NABLAI_CORE_V2.4 &middot; LINUX x86_64
            </span>
          </div>

          {/* Terminal Body with Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Blueprint Specs (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] space-y-6">
              {activeTab === 'agent' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                      STATE GRAPH ORCHESTRATION
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      Cyclical Multi-Agent Swarms
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      A master planner decomposes goals into discrete steps, domain sub-agents execute actions through validated APIs, and an independent evaluator verifies outputs before synthesis.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Deterministic safety guardrails on all API tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>State checkpointing for transparent failure recovery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Real-time human-in-the-loop escalation gates</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'rag' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                      RETRIEVAL-AUGMENTED GENERATION
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      Hybrid Reranked Retrieval
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Dense semantic embeddings combined with BM25 sparse keyword indices, funneled through a cross-encoder reranker for 100% cited answers with zero hallucinations.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Exact document page &amp; timestamp citations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Granular chunk-level Role-Based Access Control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Deployable within isolated private cloud VPCs</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'finetune' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      MODEL OPTIMIZATION &amp; COMPRESSION
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      LoRA &amp; 4-Bit AWQ Quantization
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Custom parameter-efficient fine-tuning on proprietary data. Models are quantized via 4-bit AWQ to achieve sub-40ms latency on cost-efficient GPU nodes.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Zero vendor lock-in; weights belong to you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>10x lower total cost of ownership vs commercial APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Constant sub-50ms latency without rate-limits</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Syntax-Highlighted Code Canvas (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-black/50 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              {activeTab === 'agent' && (
                <div className="space-y-2">
                  <div className="text-slate-500"># Nablai Cyclical Agentic State Graph</div>
                  <div><span className="text-purple-400">from</span> langgraph.graph <span className="text-purple-400">import</span> StateGraph, END</div>
                  <div><span className="text-purple-400">from</span> nablai.core <span className="text-purple-400">import</span> AgentState, ToolRegistry</div>
                  <br />
                  <div>workflow = StateGraph(AgentState)</div>
                  <div>workflow.add_node(<span className="text-emerald-300">&quot;planner&quot;</span>, plan_execution_tree)</div>
                  <div>workflow.add_node(<span className="text-emerald-300">&quot;tool_executor&quot;</span>, execute_deterministic_tools)</div>
                  <div>workflow.add_node(<span className="text-emerald-300">&quot;evaluator&quot;</span>, verify_grounded_output)</div>
                  <br />
                  <div><span className="text-slate-500"># Gradient confidence conditional edge</span></div>
                  <div><span className="text-purple-400">def</span> <span className="text-cyan-300">evaluate_confidence</span>(state: AgentState):</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> state.gradient_confidence &lt; <span className="text-amber-300">0.98</span>:</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-emerald-300">&quot;planner&quot;</span>  <span className="text-slate-500"># Self-healing loop</span></div>
                  <div className="pl-4"><span className="text-purple-400">return</span> END</div>
                </div>
              )}

              {activeTab === 'rag' && (
                <div className="space-y-2">
                  <div className="text-slate-500"># Hybrid Reranked Retrieval Pipeline</div>
                  <div><span className="text-purple-400">from</span> qdrant_client <span className="text-purple-400">import</span> QdrantClient</div>
                  <div><span className="text-purple-400">from</span> nablai.retrieval <span className="text-purple-400">import</span> HybridFusion, CrossEncoderReranker</div>
                  <br />
                  <div><span className="text-slate-500"># 1. Parallel dense vector &amp; BM25 sparse search</span></div>
                  <div>dense_hits = qdrant.search(collection=<span className="text-emerald-300">&quot;enterprise_docs&quot;</span>, vector=query_vec, limit=<span className="text-amber-300">50</span>)</div>
                  <div>sparse_hits = bm25_index.query(query_tokens, top_k=<span className="text-amber-300">50</span>)</div>
                  <br />
                  <div><span className="text-slate-500"># 2. Cross-encoder re-scoring with exact citations</span></div>
                  <div>reranked = CrossEncoderReranker.score(dense_hits + sparse_hits, top_k=<span className="text-amber-300">5</span>)</div>
                  <div><span className="text-purple-400">return</span> synthesizer.generate_grounded(prompt, context=reranked)</div>
                </div>
              )}

              {activeTab === 'finetune' && (
                <div className="space-y-2">
                  <div className="text-slate-500"># LoRA Fine-Tuning &amp; AWQ Quantization Deployment</div>
                  <div><span className="text-purple-400">from</span> unsloth <span className="text-purple-400">import</span> FastLanguageModel</div>
                  <div><span className="text-purple-400">from</span> vllm <span className="text-purple-400">import</span> AsyncLLMEngine, EngineArgs</div>
                  <br />
                  <div>model, tokenizer = FastLanguageModel.from_pretrained(</div>
                  <div className="pl-4">model_name=<span className="text-emerald-300">&quot;meta-llama/Llama-3.3-70B&quot;</span>,</div>
                  <div className="pl-4">load_in_4bit=<span className="text-amber-300">True</span>,</div>
                  <div>)</div>
                  <div>model = FastLanguageModel.get_peft_model(model, r=<span className="text-amber-300">16</span>, target_modules=[<span className="text-emerald-300">&quot;q_proj&quot;</span>, <span className="text-emerald-300">&quot;v_proj&quot;</span>])</div>
                  <br />
                  <div><span className="text-slate-500"># Export to 4-bit AWQ &amp; spin up production vLLM cluster</span></div>
                  <div>model.save_pretrained_awq(<span className="text-emerald-300">&quot;./model-awq-v1&quot;</span>, bits=<span className="text-amber-300">4</span>)</div>
                  <div>engine = AsyncLLMEngine.from_engine_args(EngineArgs(model=<span className="text-emerald-300">&quot;./model-awq-v1&quot;</span>, port=<span className="text-amber-300">8000</span>))</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Minimalist Monospaced Tech Index */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
          <span className="text-slate-400">STACK:</span>
          {techStack.map((tech) => (
            <span key={tech} className="hover:text-white transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ArchitectureSection
