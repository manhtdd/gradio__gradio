export type TaskStatus =
	| "success"
	| "queued"
	| "pending"
	| "closed"
	| "lost"
	| "error"
	| "stopped"
	| "waiting_connection";
export type Task = { fn: string; idx: number; status?: TaskStatus };
export type QueuePreview = [Array<Task>, Array<Task>, Array<Task>, Array<Task>];
export type RequestBreakdown = Partial<Record<TaskStatus, number>>;
export type FunctionStats = {
	fn: string;
	duration: number;
	request_breakdown: RequestBreakdown;
};

export interface ActivityLog {
	sessions: number;
	request_breakdown: RequestBreakdown;
	requests_per_fn: Array<FunctionStats>;
	event_count_per_stage: [number, number, number, number];
	queue_preview?: QueuePreview;
	active_workers: number;
}

export const task_status_colors: Record<TaskStatus, [number, number, number]> =
	{
		success: [0, 255, 0],
		pending: [0, 204, 255],
		queued: [102, 102, 102],
		closed: [102, 0, 255],
		lost: [102, 102, 204],
		error: [255, 0, 102],
		stopped: [255, 204, 0],
		waiting_connection: [255, 102, 0]
	};
