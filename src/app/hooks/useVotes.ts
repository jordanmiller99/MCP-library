/**
 * useVotes — localStorage-backed upvote hook.
 *
 * Returns { count, hasVoted, vote } for a given use case ID.
 * Each use case starts with its `popularity` value as the seed count so the
 * leaderboard has meaningful numbers on first load.
 *
 * TO SWAP IN A REAL BACKEND:
 *   Replace the body of `vote()` with an API call (e.g. POST /api/votes/:id),
 *   replace the initialisation logic with a fetch on mount, and remove the
 *   localStorage reads/writes. The hook's public API stays identical so no
 *   component changes are needed.
 */

import { useState, useEffect, useCallback } from "react";

const VOTES_KEY = "airops_vote_counts";
const VOTED_KEY = "airops_voted_ids";

function getStoredCounts(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(VOTES_KEY) || "{}");
  } catch {
    return {};
  }
}

function getVotedIds(): Set<string> {
  try {
    const raw = JSON.parse(localStorage.getItem(VOTED_KEY) || "[]");
    return new Set(Array.isArray(raw) ? raw : []);
  } catch {
    return new Set();
  }
}

export function useVotes(useCaseId: string, seedCount: number) {
  const [count, setCount] = useState<number>(() => {
    const stored = getStoredCounts();
    return stored[useCaseId] ?? seedCount;
  });

  const [hasVoted, setHasVoted] = useState<boolean>(() =>
    getVotedIds().has(useCaseId)
  );

  // Keep count in sync if another tab votes
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === VOTES_KEY) {
        const stored = getStoredCounts();
        if (stored[useCaseId] !== undefined) setCount(stored[useCaseId]);
      }
      if (e.key === VOTED_KEY) {
        setHasVoted(getVotedIds().has(useCaseId));
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [useCaseId]);

  const vote = useCallback(() => {
    if (hasVoted) return;

    // Optimistic update
    const newCount = count + 1;
    setCount(newCount);
    setHasVoted(true);

    // Persist
    const counts = getStoredCounts();
    counts[useCaseId] = newCount;
    localStorage.setItem(VOTES_KEY, JSON.stringify(counts));

    const voted = getVotedIds();
    voted.add(useCaseId);
    localStorage.setItem(VOTED_KEY, JSON.stringify([...voted]));
  }, [useCaseId, count, hasVoted]);

  return { count, hasVoted, vote };
}
